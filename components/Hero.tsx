// 'use client'
import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import getFormattedDate from "@/lib/getFormattedDate";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { getPosts } from "@/sanity/lib/client";
import TopPicks from "./TopPicks";
import TopPicksAltTwo from "./TopPicks";
import { getBanner } from "@/sanity/lib/client";

const Hero = async () => {
  const { post } = await getBanner();

  const dateUTC = post.publishedAt;
  const date = getFormattedDate(dateUTC);

  return (
    <div className="pt-14 w-full md:grid grid-cols-6 grid-rows-1">
      <section className="px-3 pt-3 pb-6 md:border-b border-gray-400/40 col-span-4 row-span-1 overflow-hidden">
        <div className="w-full aspect-[5/3] max-h-[26rem] relative">
          <Image
            className="object-cover rounded"
            src={urlForImage(post.mainImage.asset).url()}
            alt="picture of a man standing before mount everest"
            fill={true}
          />
        </div>

        <div className="py-3 space-y-2">
          <h3 className="text-fluid-xs uppercase font-libreFranklin font-medium text-rose-500 tracking-wider">
            {post.categories[0].title}
          </h3>

          <Link href={`/blog/${post.slug}`} className="block">
            <h2 className="cursor-pointer text-fluid-subheading font-garamond leading-tight">
              {post.title}
            </h2>
          </Link>

          <p className="font-desc font-light text-fade line-clamp-2">
            {post.description}
          </p>

          <div className="font-desc font-light text-fade space-x-1">
            <span>By</span>
            <span className="cursor-pointer underline hover:text-gray-600 dark:hover:text-gray-500">{post.author.name}</span>
            <span>&bull;</span>
            <span>{date}</span>
          </div>
        </div>
      </section>
      <TopPicks />
    </div>
  );
};

export default Hero;
