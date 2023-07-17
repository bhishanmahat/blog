import { getPosts } from "@/sanity/lib/client";
import Hero  from "@/components/Hero";
import Articles from "@/components/MustRead";
import MustRead from "@/components/MustRead";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <MustRead />
    </main>
  );
}
