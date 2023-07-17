import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { Post } from "@/types";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == 'post']{
    _id,
    title,
    description,
    tags,
    "slug": slug.current,
    author -> {
      name,
      image
    },
    mainImage,
    publishedAt,
    "categories": categories[] -> {
      _id,
      title,
      description
    },
    body
  }`;

  return client.fetch(query);
}

export async function getPost(slug: string): Promise<Post> {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    description,
    "slug": slug.current,
    author -> {
      name,
      image,
    },
    mainImage,
    publishedAt,
    "categories": categories[] -> {
      _id,
      title,
      description
    },
    body
  }`;

  return client.fetch(query, { slug });
}

export async function getBanner(): Promise<{post: Post}> {
  const query = `*[_type == 'banner'][0]{
    post -> {
      _id,
      author -> {
      _id,
      name,
      image
      },
      publishedAt,
      "categories": categories[] -> {
        _id,
        title,
        description
      },
      "slug": slug.current,
      description,
      title,
      mainImage,
      body
    }
  }`;

  return client.fetch(query);
}

export async function getTopPicks(): Promise<{posts: Post[]}> {
  const query = `*[_type == 'topPicks'][0]{
    "posts": post[] -> {
      _id,
      author -> {
      _id,
      name,
      image
      },
      publishedAt,
      "categories": categories[] -> {
        _id,
        title,
        description
      },
      "slug": slug.current,
      description,
      title,
      mainImage,
      body
    }
}`;

  return client.fetch(query);
}

export async function getMustRead(): Promise<{posts: Post[]}> {
  const query = `*[_type == 'mustRead'][0]{
    "posts": post[] -> {
      _id,
      author -> {
      _id,
      name,
      image
      },
      publishedAt,
      "categories": categories[] -> {
        _id,
        title,
        description
      },
      "slug": slug.current,
      description,
      title,
      mainImage,
      body
    }
}`;

  return client.fetch(query);
}


