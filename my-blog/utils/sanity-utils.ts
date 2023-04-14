import { config } from "@/sanity.client";
import { createClient, groq } from "next-sanity";

export const sanityClient = createClient(config);

export async function getAllPosts() {
  const client = createClient(config);
  return await client.fetch(
    groq`*[_type == "post"] {
            _id,
            title,
            author-> {
             name,
             image
            },
            mainImage,
            slug
          }`
  );
}

export async function getPostPaths() {
  const sanityClient = createClient(config);
  const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
  return await sanityClient.fetch(query);
}

export async function getBlogPostData(slug: string) {
  const sanityClient = createClient(config);
  const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        author-> {
            name,
            image
        },
        description,
        mainImage,
        body,
        "categories": categories[]->title
    }`;
  return await sanityClient.fetch(query, { slug });
}
