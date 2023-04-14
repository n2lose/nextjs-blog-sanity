import { PostModel } from '@/schemas/post';
import Post from './post';
import { getAllPosts } from '@/utils/sanity-utils';

interface PostsProps {
  posts: PostModel[];
}

export default function Posts({posts} : PostsProps) {
  return (
    <div id="posts" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-5 md:p-6'>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
    const posts = await getAllPosts()  
    return {
      props: { posts },
    };
  }
  
