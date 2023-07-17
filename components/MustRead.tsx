"use client"
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { getMustRead } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { getBanner } from "@/sanity/lib/client";


const MustRead = async () => {
  const { posts } = await getMustRead();

  return (
    <section className="">
      <div className="border-b border-t md:border-t-0 border-gray-400/40">
        <h2 className="py-1 text-center text-fluid-subheading font-garamond italic">
          Must Reads
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 px-3 py-4 md:py-4 md:border-b border-gray-400/40">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-span-1 max-md:sm-grid-alt md:border-r border-gray-400/40 md:md-grid"
          >
            <div className="">
              <div className="relative w-full aspect-[5/3] shadow">
                <Image
                  className="object-cover rounded-sm"
                  src={urlForImage(post.mainImage.asset).url()}
                  alt="picture of a man standing before mount everest"
                  fill={true}
                />
              </div>

              <div className="">
                <p className="text-rose-500 text-[0.8rem] font-medium uppercase py-1.5">
                  {post.categories[0].title}
                </p>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="cursor-pointer text-fluid-aside-heading font-garamond leading-tight">
                    {post.title}
                  </h3>
                </Link>

                <div className="space-x-1 text-[0.9rem] text-fade  font-desc font-light">
                  <span>By</span>
                  <span className="cursor-pointer underline hover:text-gray-600 dark:hover:text-gray-500">
                    {post.author.name}
                  </span>
                  <span>&bull;</span>
                  <span className="">{getFormattedDate(post.publishedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MustRead;
