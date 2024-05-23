import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
function Home() {

  const {name}=useContext(AppContext)
  return (
    <div>Home :{name}</div>
  )
}

export default Home