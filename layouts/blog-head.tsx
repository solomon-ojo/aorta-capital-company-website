import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

interface Types {
  title?: string;
}
export const BlogHead = ({ title }: Types) => {
  return (
    <NextHead>
      {/* <title>{title ? title : siteConfig.name}</title> */}
      {/* <meta key="title" content={siteConfig.name} property="og:title" /> */}
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:image" content="public/assets/about3.jpg" />

      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
    </NextHead>
  );
};
