import React,{useEffect,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie'

const initialization = () => {
  useEffect(() => {
    Cookies.set('deviceId', uuidv4())
  }, [])
  return false
}
export default initialization
