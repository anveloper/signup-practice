import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../authSlice'

import './signup.css'

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordc, setPasswordc] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const isLoading = false;


  const dispatch = useDispatch();

  function handleUserId(event) {
    const { value } = event.target;

    if (value.length < 17) {
      setUserId(value.replace(/\s/g, ''));
      return true;
    }
    return false;
  }

  function handlePassword(event) {
    const { value } = event.target;
    if (value.length <= 20) {
      setPassword(value.replace(/\s/g, ''));
      return true;
    }
    return false;
  }

  function handlePasswordc(event) {
    const { value } = event.target;
    if (value.length <= 20 || value === password) {
      setPasswordc(value.replace(/\s/g, ''));
      return true;
    }
    return false;
  }

  function handleNickname(event) {
    const { value } = event.target;

    if (value.length < 7) {
      setNickname(value.replace(/\s/g, ''));
      return true;
    }
    return false;
  }


  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId,
      password,
      nickname,
      email
    };
    console.log(data);
    dispatch(signupUser(data))
  }
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          placeholder="ID"
          onChange={handleUserId}
          name="nickname"
          value={userId}
        />

        <input
          placeholder="PASSWORD"
          onChange={handlePassword}
          name="password"
          type="password"
          value={password}
        />

        <input
          placeholder="PASSWORD 재확인"
          onChange={handlePasswordc}
          name="passwordc"
          type="password"
          value={passwordc}
        />

        <input
          placeholder="닉네임"
          onChange={handleNickname}
          name="nickname"
          value={nickname}
        />

        <input
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}
          name="email"
          value={email}
        />
        <button className='btn btn-primary' type="submit">
          {isLoading ? '회원가입 중입니다.' : '회원가입'}
        </button>
      </form>
    </div>
  )
}

export default SignUp