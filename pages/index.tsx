import Image from "next/image";
import DefaultLayout from "@/layouts/default";
import { SiteFiles } from "@/config/siteFiles";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex items-center h-screen">
        {/* Left */}
        <div className="relative flex-1">
          <Image
            src={SiteFiles.homeBg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
          />

          <div className="absolute flex items-center justify-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores rem minima praesentium esse pariatur, earum alias, nobis,
            accusamus animi quibusdam libero natus inventore ad similique error
            aperiam perferendis recusandae.
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 bg-gray-200 flex items-center justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            veritatis distinctio mollitia beatae voluptatem culpa commodi
            debitis recusandae ex qui, nemo quo voluptatibus odio nulla,
            officiis excepturi! Doloremque, recusandae non?
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
