import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  console.log(userInfo)
  return (
    <div>

    </div>
  )
}

export default Home