import { getPost } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import getFormattedDate from "@/lib/getFormattedDate";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import RichTextComponents from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};


const Blog = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);

  return (
    <main className="pt-14 pb-10">
      <header className="w-full h-[calc(100vh-3.5rem)] border-b border-gray-400/40 flex flex-col md:flex-row">
        <div className="basis-1/2 flex justify-center items-center">
          <div className="w-4/6 space-y-3 text-center">
            <p className="font-desc text-rose-500 tracking-wider font-medium text-fluid-sm uppercase w-fit mx-auto">
              {post.categories[0].title}
            </p>
            <h1 className="text-fluid-heading font-garamond leading-tight">
              {post.title}
            </h1>

            <p className="font-garamond text-fluid-md italic">
              {post.description}
            </p>

            <div className="font-libreFranklin text-fluid-xs space-x-1">
              <span>By</span>
              <Link href="#">
                <span className="underline">{post.author.name}</span>
              </Link>
              <p className="text-fade">{getFormattedDate(post.publishedAt)}</p>
            </div>
          </div>
        </div>

        <div className="basis-1/2">
          <figure className="w-full h-full relative">
            <Image
              src={urlForImage(post.mainImage.asset).url()}
              alt={post.mainImage.alt}
              fill={true}
              className="rounded object-cover"
            />
          </figure>

          {/* <figcaption className="font-desc font-light text-fade pt-4">
            <span>{post.mainImage.caption}</span>
          </figcaption> */}
        </div>
      </header>
      <figcaption className="font-desc font-light text-fade text-center p-2 border-b border-gray-400/40">
        <span>{post.mainImage.alt}</span>
      </figcaption>

      <article className="w-5/6 md:w-3/6 mx-auto font-garamond text-fluid-content leading-[1.5em] text-justify pt-5 pb-2.5">
        <PortableText value={post.body} components={RichTextComponents} />
      </article>

      <hr className="border border-stone-300  dark:border-zinc-600" />
      <section className="flex items-center gap-4 mt-5 w-5/6 mx-auto">
        <div className="basis-1/5 max-w-[6rem] justify-self-center aspect-square">
          <Image
            src={urlForImage(post.author.image.asset).url()}
            height={200}
            width={200}
            className="rounded-full my-auto"
            alt="author image"
          />
        </div>

        <div className="basis-4/5 font-desc">
          <span className="mr-1 text-fade">By</span>
          <span className="font-light">{post.author.name}</span>
          {/* <span className="text-gray-400 text-sm">&nbsp;(Kathmandu, NP)</span> */}
          <p className="font-light text-fade">
            He currently works at his own company which provides services to
            marginalized communities to expand their reach to technology.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
