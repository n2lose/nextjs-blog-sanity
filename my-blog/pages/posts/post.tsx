import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity.client";
import { PostModel } from "@/schemas/post";

const Post = (post: PostModel) => {
  return (
    <Link key={post._id} href={`/posts/${post.slug.current}`}>
      <div className="overflow-hidden border rounded-lg cursor-pointer group">
        <Image
          src={urlFor(post.mainImage).url()!}
          alt=" main blog image"
          width={500}
          height={300}
          className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
          unoptimized 
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>
        </div>
        <Image
          className="w-12 h-12 rounded-full"
          src={urlFor(post.author.image).url()!}
          alt=""
          width={100}
          height={100}
          unoptimized 
        />
      </div>
    </Link>
  );
};

export default Post;
