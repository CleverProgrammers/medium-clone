import Head from 'next/head'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container: `max-w-7xl flex-1`,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
}

export default function Home() {
  const { allPosts } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Medium | Clever Programmer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postsList}>
              {allPosts.map(post => (
                <PostCard post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
