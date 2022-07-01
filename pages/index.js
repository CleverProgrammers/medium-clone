import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'

const posts = [
  {
    id: 1,
    title: 'Visualizing Gas Prices: AAA.com, GasBuddy.com, and FoxNews.com',
    description:
      'How do you give unbiased, actionable information in map form?',
    postedOn: 'Jun 29',
    postLength: 5,
    category: 'Environment',
    author: {
      name: 'David Rakosi',
    },
  },
  {
    id: 2,
    title: 'My first post',
    description: 'This is my first post',
    author: {
      name: 'David Rakosi',
    },
  },
  {
    id: 3,
    title: 'My first post',
    description: 'This is my first post',
    author: {
      name: 'David Rakosi',
    },
  },
]

export default function Home() {
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
              {posts.map(post => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
