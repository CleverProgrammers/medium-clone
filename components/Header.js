import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { MediumContext } from '../context/MediumContext'
import UploadModal from './UploadModal'
import Logo from '../static/logo.png'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const styles = {
  wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: `flex items-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannerNav: `flex cursor-pointer items-center space-x-5`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
}

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const { user, handleUserAuth } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            alt='logo'
            height={40}
            width={200}
          />
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          {/* USER */}
          {user ? (
            <>
              <Link href={'/?addNew=1'}>
                <div className={styles.accentedButton}>Write</div>
              </Link>
              <div className={styles.accentedButton}>
                <div>Get unlimited access</div>
              </div>
            </>
          ) : (
            <>
              <div onClick={handleUserAuth}>Sign In</div>
              <div onClick={handleUserAuth} className={styles.accentedButton}>
                <div>Get Started</div>
              </div>
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={!!router.query.addNew}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <UploadModal />
      </Modal>
    </div>
  )
}

export default Header
