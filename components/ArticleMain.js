import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'

import Author from '../static/author.jpg'
import Thumbnail from '../static/thumbnail.webp'

const styles = {
  wrapper: `h-screen overflow-scroll flex-[3] border-l border-r p-[2rem]`,
  referencesContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  image: `object-cover`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
}

const ArticleMain = ({ post }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.referencesContainer}>
        <div className={styles.authorContainer}>
          <div className={styles.authorProfileImageContainer}>
            <Image className={styles.image} src={Author} alt='author' />
          </div>
          <div className={styles.column}>
            <div>{post.author.name}</div>
            <div className={styles.postDetails}>
              <span>
                {post.postedOn} • {post.postLength} min read •
              </span>
              <span className={styles.listenButton}>
                <AiFillPlayCircle /> Listen
              </span>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <IoLogoTwitter />
          <FaFacebook />
          <GrLinkedin />
          <HiOutlineLink />
          <div className={styles.space} />
          <BiBookmarks />
          <FiMoreHorizontal />
        </div>
      </div>
      <div className={styles.articleMainContainer}>
        <div className={styles.bannerContainer}>
          <Image className={styles.image} src={Thumbnail} alt='banner' />
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <h4 className={styles.subtitle}>
          <div>
            {post.author.name}, {post.postedOn}
          </div>
          <div>{post.description}</div>
        </h4>
        <div className={styles.articleText}>{articleText}</div>
      </div>
      <div>reactions</div>
    </div>
  )
}

export default ArticleMain

const articleText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque hic
          iste quod recusandae quaerat laboriosam dicta veniam omnis natus
          adipisci voluptates suscipit et, totam ullam quis enim molestiae
          assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sed magnam recusandae deserunt provident voluptatem facilis eveniet

          esse, eos at, tempora quia delectus non explicabo aliquam dolorem
          suscipit. Debitis, laudantium tempore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex atque hic iste quod recusandae

          quaerat laboriosam dicta veniam omnis natus adipisci voluptates
          suscipit et, totam ullam quis enim molestiae assumenda. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Sed magnam recusandae
          deserunt provident voluptatem facilis eveniet esse, eos at, tempora
          quia delectus non explicabo aliquam dolorem suscipit. Debitis,


          laudantium tempore.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex atque hic iste quod recusandae quaerat laboriosam dicta
          veniam omnis natus adipisci voluptates suscipit et, totam ullam quis
          enim molestiae assumenda. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sed magnam recusandae deserunt provident voluptatem
          facilis eveniet esse, eos at, tempora quia delectus non explicabo
          aliquam dolorem suscipit.

          Debitis, laudantium tempore.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ex atque hic iste quod
          recusandae quaerat laboriosam dicta veniam omnis natus adipisci
          voluptates suscipit et, totam ullam quis enim molestiae assumenda.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magnam
          recusandae deserunt provident voluptatem facilis eveniet esse, eos at,
          tempora quia delectus non explicabo aliquam dolorem suscipit. Debitis,
          laudantium tempore.Lorem ipsum dolor sit amet consectetur adipisicing
          eli

          t. Ex atque hic iste quod recusandae quaerat laboriosam dicta
          veniam omnis natus adipisci voluptates suscipit et, totam ullam quis
          enim molestiae assumenda. Lorem ipsum dolor sit amet, consectetur


          adipisicing elit. Sed magnam recusandae deserunt provident voluptatem
          facilis eveniet esse, eos at, tempora quia delectus non explicabo

          aliquam dolorem suscipit. Debitis, laudantium tempore. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ex atque hic iste quod
          recusandae quaerat laboriosam dicta veniam omnis natus adipisci
          voluptates suscipit et, totam ullam quis enim molestiae assumenda.

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magnam
          recusandae deserunt provident voluptatem facilis eveniet esse, eos at,
          tempora quia delectus non explicabo aliquam dolorem suscipit. Debitis,
          laudantium tempore.`
