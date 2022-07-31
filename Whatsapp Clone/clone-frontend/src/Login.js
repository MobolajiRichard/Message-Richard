import React from 'react'
import {Button} from '@mui/material'
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [{}, dispatch] = useStateValue()
  const signIn = () =>{
    auth
      .signInWithPopup(provider)
      .then((result)=>{
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((error) => alert => (error.message))
  }
  return (
    <div className='login_container'>
      <img className='login_image' src='/image/MRLOGO.png' />
      <Button onClick={signIn} >Sign In With Google</Button>
    </div>
  )
}

export default Login