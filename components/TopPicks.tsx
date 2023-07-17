import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { getTopPicks } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const TopPicks = async () => {
  const { posts } = await getTopPicks();

  return (
    <section className="col-start-5 col-span-2 md:flex flex-col">
      <div className="border-b border-t md:border-none border-gray-400/40 md:pt-3">
        <div className="md:border-l border-gray-400/40 md:pl-4">
          <h2 className="text-center py-1 md:py-0 text-fluid-subheading font-garamond italic md:border-b border-gray-400/40">
            Top Picks
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 px-3 py-5 md:grid-rows-4 md:grid-cols-1 md:px-0 md:py-0 md:pl-4 md:border-l border-gray-400/40 md:flex-1">
        {posts.map((post) => (
          <div
            key={post._id}
            className="odd:border-r even:border-b first:border-b last:border-none border-gray-400/40 odd:pr-4 even:pl-4 first:pb-4 last:pt-4 odd:pt-4 odd:first:pt-0 even:pb-4 even:last:pb-0 md:odd:p-0 md:even:p-0 md:border-none"
          >
            <div className="grid h-full md:border-b border-gray-400/40">
              <div className="md:my-auto">
                <p className="text-rose-500 text-[0.8rem] font-medium uppercase pb-1.5 hidden md:block">
                  {post.categories[0].title}
                </p>
                <div className="lg:flex gap-3">
                  <div className="md:hidden lg:block basis-1/4 lg:order-2">
                    <div className="relative w-full aspect-[5/3] shadow">
                      <Image
                        className="object-cover rounded-sm"
                        src={urlForImage(post.mainImage.asset).url()}
                        alt="picture of a man standing before mount everest"
                        fill={true}
                      />
                    </div>
                  </div>

                  <div className="basis-3/4">
                    <p className="text-rose-500 text-[0.8rem] font-medium uppercase py-1.5 md:hidden">
                      {post.categories[0].title}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="cursor-pointer text-fluid-aside-heading font-garamond leading-tight md:line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <div className="sm:space-x-1 space-y-1 text-sm text-fade  font-desc font-light">
                      <span className="mr-1 sm:mr-0">By</span>
                      <span className="cursor-pointer underline hover:text-gray-600 dark:hover:text-gray-500">
                        {post.author.name}
                      </span>
                      <span className="hidden sm:inline">&bull;</span>
                      <span className="block sm:inline">
                        {getFormattedDate(post.publishedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
