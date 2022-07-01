import Head from 'next/head'
import Link from 'next/link'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'))

      setPosts(
        querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              title: doc.data().title,
              comments: doc.data().comments,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          }
        }),
      )
    })()
  }, [])

  return (
    <div className='mx-auto'>
      <Head>
        <title>Medium | Clever Programmer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Banner />
        <div className='flex justify-center'>
          <div className='max-w-7xl flex-1'>
            <div className='flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3'>
              {posts?.map(post => (
                <PostCard post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
