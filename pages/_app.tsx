import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { Progress } from "@nextui-org/progress";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => setLoading(true);
    const handleRouteEnd = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
    router.events.on("routeChangeError", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteEnd);
      router.events.off("routeChangeError", handleRouteEnd);
    };
  }, [router]);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <main className="light text-foreground bg-background">
          {loading && (
            <Progress
              size="sm"
              className="bg-[#22c55e]"
              isIndeterminate
              aria-label="Loading..."
            />
          )}
          <Component {...pageProps} />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  // mono: fontMono.style.fontFamily,
};
