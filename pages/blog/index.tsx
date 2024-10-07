import { BlogPostComp } from "@/components/blogcomp/blogpostcomp";
import { PagesHeader } from "@/components/pagesHeader";
import { PostObject } from "@/data/objects";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="about-hero-light-yellow-bg flex h-full px-6 xl:px-0 flex-col items-center">
        <div className="w-full md:w-[700px] lg:w-[900px]">
          {/* Header */}
          <PagesHeader title="Our Blog">
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
          <div className="mb-5 flex flex-col items-center">
            <div className="w-full flex flex-col gap-8 md:max-w-[80%]">
              {PostObject.map((data) => (
                <Link
                  key={data.id}
                  href={`/blog/${data.unique_id.toLowerCase()}`}
                >
                  <BlogPostComp
                    id={data.id}
                    title={data.title}
                    avatar_src={data.avatar_src}
                    created_at={data.created_at}
                    post_img={data.post_img}
                    description={data.description}
                    author={data.author}
                    likes={data.likes}
                    comment={data.comment}
                  />
                </Link>
              ))}
            </div>
          </div>
          <span className="h-[2px] bg-black w-4 block my-10"></span>
        </div>
      </section>
    </DefaultLayout>
  );
}
