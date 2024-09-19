import { PagesHeader } from "@/components/pagesHeader";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="bg-white flex h-full px-4 xl:px-0 flex-col items-center">
        <div className="w-full md:w-[700px] lg:w-[900px]">
          {/* Header */}
          <PagesHeader>
            <p className="text-[15px] xl:text-[18px] font-lato leading-[25px] home-text-color">
              <span className="font-[300]">
                Ribbit. Because the World Needs More Financial Innovation.
              </span>
              <br />
              <span className="font-semibold">
                And Less Financial Engineering.
              </span>
            </p>
          </PagesHeader>

          {/* Body */}
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              qui ratione modi nemo quos distinctio maiores ea iste autem quis
              accusantium vero, molestias similique ipsum exercitationem totam
              laboriosam ducimus ipsam.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
