import {useState,useEffect} from 'react'

const auth = window.firebase.auth()
const provider = new window.firebase.auth.GoogleAuthProvider()

export function useAuthentication(){
  const [authenticated, setAuthenticated] = useState('loading')

  function login(){
    auth.signInWithPopup(provider)
  }
  function logout(){
    auth
    .signOut()
    .then(function(){
      console.log('logout ok')
    })
    .catch(function(error){
      console.log(error)
    })
  }
  useEffect(()=>{
    auth.onAuthStateChanged(function(user){
      if(user){
        setAuthenticated(user)
      }else{
        setAuthenticated()
      }
    },function(error){
      console.log(error)
    })
  },[])
  return {login ,logout, loggedIn:authenticated}
}