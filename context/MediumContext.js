import { createContext, useState, useEffect } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const MediumContext = createContext()

export const MediumProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [allUsers, setAllUsers] = useState([])
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))

      setAllUsers(
        querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          }
        }),
      )
    })()
  }, [user])

  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'))

      setAllPosts(
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

  const handleUserAuth = async () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user

        setUser(user)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  return (
    <MediumContext.Provider
      value={{ user, handleUserAuth, allPosts, allUsers }}
    >
      {children}
    </MediumContext.Provider>
  )
}
