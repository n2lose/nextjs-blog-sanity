import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity";
import { PostModel } from "@/schemas/post";


const Post = (post: PostModel) => {
    console.log("post ==== ", post);
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="overflow-hidden border rounded-lg cursor-pointer group">
        <img
          src={urlFor(post.mainImage).url()!}
          alt=" main blog image"
          className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>
        </div>
        <img
          className="w-12 h-12 rounded-full"
          src={urlFor(post.author.image).url()!}
          alt=""
        />
      </div>
    </Link>
  );
};

export default Post;
