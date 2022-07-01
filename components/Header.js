import Image from 'next/image'
import Link from 'next/link'
import Logo from '../static/logo.png'

const styles = {
  wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: `flex items-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannerNav: `flex cursor-pointer items-center space-x-5`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Image
              className={styles.logo}
              src={Logo}
              alt='logo'
              height={40}
              width={200}
            />
          </Link>
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Write</div>
          <div>Sign In</div>
          <div className={styles.accentedButton}>
            <div>Get Started</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
