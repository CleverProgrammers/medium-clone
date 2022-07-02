import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { FiBookmark } from 'react-icons/fi'

const styles = {
  wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorName: `font-semibold`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  bookmarkContainer: `cursor-pointer`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  thumbnailContainer: `flex-1`,
}

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null)

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(
        await (await getDoc(doc(db, 'users', post.data.author))).data(),
      )
    }

    getAuthorData()
  }, [post])

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              {authorData && (
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${authorData.imageUrl}`}
                  alt='author'
                  className={styles.authorImage}
                  height={40}
                  width={40}
                />
              )}
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>{post.data.title}</h1>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
              })}
              • {post.data.postLength} min read •{' '}
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            alt='thumbnail'
            height={100}
            width={100}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
