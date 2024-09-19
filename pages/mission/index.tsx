import { PagesHeader } from "@/components/pagesHeader";
import { PageTitle } from "@/components/pageTitle";
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
            <p className="text[15px] paragraph home-text-color leading-[30px] font-normal font-lora xl:text-[17px]">
              The Internet has reached in, grabbed, and made the world we once
              knew totally unrecognizable. Yet the world of finance is, sadly,
              totally recognizable. The way we transact, save, borrow, invest
              and manage our money has barely advanced. Yes, there has been some
              recent innovation– we’re proud to have invested behind many of the
              intrepid entrepreneurs who are leading the charge – but it is far
              from enough.
            </p>
            <p className="text[15px] paragraph home-text-color leading-[30px] font-normal font-lora xl:text-[17px]">
              In short, we are still at the beginning of the beginning. Case in
              point: less than 1% of all loans in the world are made online.
              (Yeah, you heard us right). We’re all stuck in a financial time
              warp.
            </p>
            <p className="text[15px] paragraph home-text-color leading-[30px] font-normal font-lora xl:text-[17px]">
              And just like newspapers, travel agents, hotels and taxi companies
              have been turned upside down from outside the cozy confines of
              their industries, don’t expect banks to lead us out of the warp.
              They’ve proven themselves either unable to create internal
              environments where innovation can flourish – or simply unwilling
              to change even though it’s best for their customers.
            </p>
            <p className="text[15px] paragraph home-text-color leading-[30px] font-normal font-lora xl:text-[17px]">
              Ribbit Capital is a global investment organization with one
              single, relentless mission: to change the world of finance. When
              we look back at our mantra from the day we launched in 2012, the
              beliefs and values motivating our mission have not changed.
            </p>

            <PageTitle text={"This we believe:"} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
