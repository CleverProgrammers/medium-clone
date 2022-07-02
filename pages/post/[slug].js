import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'
import { MediumContext } from '../../context/MediumContext'
import ReadersNav from '../../components/ReadersNav'
import ArticleMain from '../../components/ArticleMain'
import Recommendations from '../../components/Recommendations'

const styles = {
  wrapper: ``,
  content: `flex`,
}

const Post = () => {
  const router = useRouter()
  const { allPosts, allUsers } = useContext(MediumContext)
  const [author, setAuthor] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    if (!(allPosts.length === 0)) {
      setPost(allPosts.filter(post => post.id === router.query.slug))
    }
  }, [allPosts, router.query.slug])

  useEffect(() => {
    if (!(post.length === 0 || allUsers.length === 0)) {
      setAuthor(allUsers.filter(user => user.id === post[0].data.author))
    }
  }, [allUsers, post, allUsers.length])

  return (
    <>
      <Head>
        <title>Medium | Clever Programmer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.content}>
        <ReadersNav />
        <ArticleMain post={post} author={author} />
        <Recommendations author={author} />
      </main>
    </>
  )
}

export default Post
