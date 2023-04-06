import {client}  from '../../sanity'

export default function Posts(posts : any) {
  console.log("posts =========== ", posts);
  return (
    <>
      Blog Post list
    </>
  )
}

export async function getStaticProps() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
      'slug': slug.current,
      body
    }`;
  
    const posts = await client.fetch(query);
  
    return {
      props: { posts },
    };
  }
  
