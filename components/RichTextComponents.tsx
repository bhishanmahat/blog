import { urlForImage } from "@/sanity/lib/image";
import { PortableTextComponents } from "@portabletext/react";


export const RichTextComponents: PortableTextComponents =  {
  block: {
    normal: ({ children, index }) => {
      if (index === 0) {
        return <p className="text-justify pb-2.5">{children}</p>;
      } else {
        return <p className="text-justify py-2.5">{children}</p>;
      }
    },

    h2: ({ children, index }: any) => {
      if (index === 0) {
        return (
          <h2 className="-mb-1 text-left font-garamond font-bold">
            {children}
          </h2>
        );
      } else {
        return (
          <h2 className="pt-1.5 -mb-3 text-left font-garamond font-bold">
            {children}
          </h2>
        );
      }
    },
  },
  types: {
    image: ({ value, isInline }) => {
      return (
        <figure className="py-2.5">
          <div className="w-fit mx-auto">
            <img
              src={urlForImage(value).width(800).height(400).url()}
              className="rounded"
              alt={value.alt}
            />
            <figcaption className="text-fade font-libreFranklin">
              <span>{value.alt}</span>
            </figcaption>
          </div>
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a className="underline text-sky-500" href={value.href}>
          {children}
        </a>
      );
    },
    em: ({ children }) => <em className="text-teal-600">{children}</em>,
    strong: ({ children }) => <strong className="">{children}</strong>,
  },
  list: {
    number: ({ children }) => <ol className="w-5/6 mx-auto">{children}</ol>,
  },
  listItem: {
    number: ({ children }) => (
      <li className="list-decimal py-1.5">{children}</li>
    ),
  },
};

export default RichTextComponents