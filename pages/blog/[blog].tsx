import { PagesHeader } from "@/components/pagesHeader";
import { ParagraphComp } from "@/components/paragraphComp";
import { PostObject } from "@/data/objects";
import BlogLayout from "@/layouts/blog";
import { Avatar } from "@nextui-org/avatar";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { GiStarShuriken } from "react-icons/gi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { PiHandsClappingBold } from "react-icons/pi";
import { RiChat3Fill } from "react-icons/ri";

export default function BlogDetails() {
  const router = useRouter();
  const { blog } = router.query;
  // Find the company details by name
  const postobject = PostObject.find((c) => c.unique_id.toLowerCase() === blog);
  if (!postobject) {
    return (
      <BlogLayout>
        <Head>
          <title>Blog Site</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Blog Title" />
          <meta property="og:description" content="Blog Description" />
          <meta property="og:site_name" content="Aorta Capital" />
          <meta property="og:image" content={"/assets/about1.jpg"} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
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
        </Head>
        <section className="about-hero-light-yellow-bg flex h-full px-6 xl:px-0 flex-col items-center">
          <div className="w-full md:w-[700px] lg:w-[900px]">
            {/* Header */}
            <PagesHeader title="Aorta Capital ">
              <p className="text-[15px] xl:text-[18px] font-lora leading-[25px] home-text-color">
                <span className="font-[300] opacity-80">
                  Unavailable post 😔
                </span>
                <br />
                <span className="font-semibold">Do check for other blogs</span>
              </p>
            </PagesHeader>
            <span className="h-[2px] bg-black w-4 block my-10"></span>
          </div>
        </section>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <Head>
        <title>{postobject.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postobject.title} />
        <meta property="og:description" content={postobject.description} />
        <meta property="og:image" content={postobject.post_img} />
        <meta
          property="og:url"
          content={`https://www.aortacap.com/blog/${postobject.unique_id}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Aorta Capital" />

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
      </Head>
      <section className="about-hero-light-yellow-bg flex h-full px-6 xl:px-0 flex-col items-center">
        <div className="w-full md:w-[700px] lg:w-[900px]">
          {/* Header */}
          <PagesHeader title={postobject.title}>
            <p className="text-[15px] xl:text-[18px] max-w-[700px] font-lora leading-[25px] home-text-color">
              <span className="font-semibold ">
                {postobject.description.length > 220
                  ? postobject.description.substring(0, 220) + "..."
                  : postobject.description.substring(0, 220)}
              </span>
            </p>
            <br />
            <div className="flex items-center gap-2">
              <Avatar
                src={postobject.avatar_src}
                className=" shrink-0"
                size="md"
              />
              <div className="flex flex-col leading-[17px]">
                <p className="font-[300] opacity-80">{postobject.author}</p>
                <span className="font-[300] text-[13px] opacity-70">
                  {postobject.position} - {postobject.created_at}{" "}
                </span>
              </div>
            </div>
            <div className="mt-2 flex w-full items-center justify-between">
              <div className="flex items-center gap-4 basis-[100%] w-full">
                <GiStarShuriken color="#FFC016" size={18} />
                <p className="text-[12px] font-[300] opacity-90">
                  {postobject.created_at}
                </p>

                <div className="flex items-center gap-1">
                  <PiHandsClappingBold size={16} className="text-gray-600" />
                  <p className="text-[13px] font-[300] opacity-90">
                    {postobject.likes}
                  </p>
                </div>
                <MdOutlineBookmarkAdd size={16} className="text-gray-600" />
              </div>
            </div>
          </PagesHeader>

          {/* Body */}
          <div className="mb-5 flex gap-10 flex-col">
            <div className="w-full h-[300px] sm:h-[400px] relative">
              <Image
                src={postobject.post_img}
                layout="fill"
                objectFit="cover"
                quality={40}
                alt={postobject.title}
              />
            </div>

            <div>

              <ParagraphComp>
                  {postobject.paragraph_1}
              </ParagraphComp>

              <ParagraphComp>
              {postobject.paragraph_2}
              </ParagraphComp>

              <ParagraphComp>
                {postobject.paragraph_3}
              </ParagraphComp>

              <ParagraphComp>
                {postobject.paragraph_4}
              </ParagraphComp>

              <ParagraphComp>
                {postobject.paragraph_5}
              </ParagraphComp>

              <ParagraphComp>
                  {postobject.paragraph_6}
              </ParagraphComp>

  
  
            </div>
          </div>

          <span className="h-[2px] bg-black w-4 block my-10"></span>
        </div>
      </section>
    </BlogLayout>
  );
}
