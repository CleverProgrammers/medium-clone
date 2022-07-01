import Image from 'next/image'
import { FiBookmark } from 'react-icons/fi'

import Thumbnail from '../static/thumbnail.webp'
import Author from '../static/author.jpg'

const styles = {
  wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem]`,
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.authorContainer}>
          <div className={styles.authorImageContainer}>
            <Image src={Author} alt='author' className={styles.authorImage} />
          </div>
          <div className={styles.authorName}>{post.author.name}</div>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.briefing}>{post.description}</div>
        <div className={styles.detailsContainer}>
          <span className={styles.articleDetails}>
            {post.postedOn} • {post.postLength} min read •{' '}
            <span className={styles.category}>{post.category}</span>
          </span>
          <span className={styles.bookmarkContainer}>
            <FiBookmark className='h-5 w-5' />
          </span>
        </div>
      </div>
      <div className={styles.thumbnailContainer}>
        <Image src={Thumbnail} alt='thumbnail' />
      </div>
    </div>
  )
}

export default PostCard
