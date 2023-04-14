import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { urlFor } from '@/sanity.client'
import { PostModel } from '@/schemas/post'
import { getBlogPostData, getPostPaths, sanityClient } from '@/utils/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

interface PropsModel {
    post: PostModel
}

const Post = (props: PropsModel) => {
  const { title, author, categories, mainImage, _createdAt, description, body } = props.post
  return (
      <>
        <Header siteAuthor={author.name} siteTitle={title} />   
        <div className='blog-post'>
            <Image className="w-full object-cover h-[300px]" 
                src={urlFor(mainImage).url()!}
                alt=""
                width={500} 
                height={300}               
                unoptimized
            />    
            <article className="max-w-3xl p-5 mx-auto">
                <h1 className="mt-10 mb-3 text-3xl">{title}</h1>
                {description && (<h3 className="mb-2 text-xl font-light text-gray-500">{description}</h3>)}
                {categories && (
                    <ul>
                    Posted in
                    {categories.map(category => <li key={category}>{category}</li>)}
                    </ul>
                )}
                <div className="flex items-center space-x-2">
                    <Image className="w-10 h-10 rounded-full" src={urlFor(author.image).url()!} alt="" width={100} height={100} unoptimized />
                    <p className="text-sm font-extralight">
                        Blog post by {" "} 
                        <span className="text-blue-400">{author.name}</span> - 
                        Published at { new Date(_createdAt).toLocaleString()}
                    </p>
                </div>
                <div>
                    <PortableText value={body}  />
                </div>
            </article>
        </div> 
        <Footer siteAuthor={author.name} siteTitle={title} />
    </>
    
  )
}

export async function getStaticPaths() {
  const paths = await getPostPaths();
  return {
    paths: paths.map((slug: string) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params  
  const post = await getBlogPostData(slug)
  return {
    props: {
      post
    }
  }
}

export default Post