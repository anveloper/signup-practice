import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  return (
    <div>
      <h3>State에 저장된 userInfo 값</h3>
      <h5>userInfo.userId : {userInfo.userId}</h5>
      <h5>userInfo.password : {userInfo.password}</h5>
      <h5>userInfo.nickname : {userInfo.nickname}</h5>
      <h5>userInfo.email : {userInfo.email}</h5>
    </div>
  )
}

export default Home