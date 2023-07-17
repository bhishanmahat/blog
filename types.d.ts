import { PortableTextBlock, Reference } from "sanity";

type Base = {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
};

interface Post extends Base {
  author: Author;
  body: PortableTextBlock[];
  // categories: Reference[];
  description: string;
  image: string;
  mainImage: Image;
  publishedAt: string;
  slug: Slug;
  title: string;
  categories:Category[];
}

interface Image {
  alt: string;
  asset: {
    url: string
  }
}

interface Slug {
  current: string;
}

interface Author {
  _id:string;
  name: string;
  slug: Slug;
  // image: { 
  //   alt: string;
  //   asset: Reference 
  // }
  image: Image
}

interface Category {
  _id: string;
  title: string;
  description: string;
}



