import { useState } from 'react'
import { GetStaticProps } from 'next'
import Header from '../../components/Header'
// import { sanityClient, urlFor } from '../../sanity'
import PortableText from 'react-portable-text'
// import { useForm, SubmitHandler } from 'react-hook-form'
import Head from 'next/head'
import Link from 'next/link'
import ReadersNav from '../../components/ReadersNav'
import ArticleMain from '../../components/ArticleMain'
import Recommendations from '../../components/Recommendations'

const post = {
  id: 1,
  author: {
    name: 'David Rakosi',
  },
  title: 'Visualizing Gas Prices: AAA.com, GasBuddy.com, and FoxNews.com',
  description: 'How do you give unbiased, actionable information in map form?',
  postedOn: 'Jun 29',
  postLength: 5,
  category: 'Environment',
  body: 'body',
  comments: [
    {
      _id: 1,
      name: 'name',
      comment: 'comment',
    },
  ],
}

const styles = {
  wrapper: ``,
  content: `flex`,
}

const Post = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.content}>
        <ReadersNav />
        <ArticleMain post={post} />
        <Recommendations />
      </main>
    </>
  )
}

export default Post

// export const getStaticPaths = async () => {
//   const query = `*[_type=="post"]{
//     _id,
//     slug{
//     current
//   }
//   }`
//   const posts = await sanityClient.fetch(query)

//   const paths = posts.map(path => ({
//     params: { slug: path.slug.current },
//   }))

//   return { paths, fallback: 'blocking' }
// }

// export const getStaticProps = async ({ params }) => {
//   const query = `*[_type=="post"&& slug.current==$slug][0]{
//     _id,
//   _createdAt,
//   title,
//   author->{
//   name,
//   image
// },
//   'comments': *[
//   _type=="comment" &&
//   post._ref==^._id &&
//   approved==true],
// categories,
// 'allcategories':*[
//   _type=="category"
// ],
// description,
// mainImage,
// slug,
// body
//   }`
//   const post = await sanityClient.fetch(query, { slug: params?.slug })

//   if (!post || post.length === 0) {
//     return { notFound: true }
//   }
//   return {
//     props: {
//       post,
//     },
//     revalidate: 500,
//   }
// }
