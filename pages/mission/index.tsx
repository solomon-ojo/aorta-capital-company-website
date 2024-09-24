import { PagesHeader } from "@/components/pagesHeader";
import { PageTitle } from "@/components/pageTitle";
import { ParagraphComp } from "@/components/paragraphComp";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="bg-white flex h-full px-6 xl:px-0 flex-col items-center">
        <div className="w-full md:w-[700px] lg:w-[900px]">
          {/* Header */}
          <PagesHeader title="Mission">
            <p className="text-[15px] xl:text-[18px] font-lora leading-[25px] home-text-color">
              <span className="font-[300] opacity-80">
                We have a level ground to play on:
              </span>
              <br />
              <span className="font-semibold">
                There has never been a better time to effect a change in
                Africa...
              </span>
            </p>
          </PagesHeader>

          {/* Body */}
          <div className="mb-5">
            <ParagraphComp>
              When quizzed during a speech in his most recent national tour,
              Obasanjo, Nigerian past president, made an intriguing statement
              that offers great insight about his journey on how he rose to
              become the president of Nigeria from a lowly, impoverished farm
              boy in Ogun state, Nigeria.
            </ParagraphComp>

            <ParagraphComp>
              “I joined the military” he said. “Shortly after, Nigeria gained
              independence. Then, suddenly, there was an even ground to play
              on”.
            </ParagraphComp>

            <ParagraphComp>
              <span className="font-semibold">
                “...suddenly, there was an even ground to play on”
              </span>
            </ParagraphComp>

            <ParagraphComp>
              This is an incredibly insightful statement to which a discerning
              mind ought to pay very close attention.
            </ParagraphComp>

            <ParagraphComp>
              To Obasanjo and his contemporaries in their time, the army was the
              even ground providence provided. It was the even ground that
              erased and removed all societal and aristocratic blockades set in
              place to frustrate and keep the ordinary man ordinary. The army
              was what provided an even ground for their generation to play on.
              An even ground where what mattered was abilities and capabilities;
              not statuses and connections.
            </ParagraphComp>

            <ParagraphComp>
              Today, in our own generation, that even ground is{" "}
              <span className="font-semibold">technology.</span>
            </ParagraphComp>

            <ParagraphComp>
              Technology has removed all obstacles and barricades that was
              hitherto set by the ruling class to hamper the ordinary man’s
              effort or ascension.
            </ParagraphComp>

            <ParagraphComp>
              Today, anyone, anywhere, can pick up a computer, put himself under
              strict training, and emerge after a few years, with skills that
              will put him on par with any other “privileged” person of our
              society.
            </ParagraphComp>

            <ParagraphComp>
              What joining the army gave Obasanjo and his ilk in their days,
              technology has given to us now.
            </ParagraphComp>

            <ParagraphComp>
              The question is: what will we do with it?
            </ParagraphComp>

            {/* Optimized full-width Image */}
            <div className="my-6 w-full">
              <Image
                src="/assets/Mission.jpg"
                alt="ceo"
                quality={60}
                layout="responsive"
                width={1000}
                height={500}
                className="object-cover"
                priority
              />
            </div>

            <ParagraphComp>
              Aorta’s goal is simple: To build the Africa we desire, by
              Africans, owned by Africans, and independent of the inefficiencies
              and inconsistencies of the government. Harnessing the limitless
              capabilities afforded us by recent advancement in technologies,
              and the colossal resources of the crowd.
            </ParagraphComp>

            <ParagraphComp>
              <span className="font-semibold">
                We are not hoping for a better future, we are building it.
              </span>
            </ParagraphComp>

            <span className="h-[2px] bg-black w-4 block my-10"></span>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
