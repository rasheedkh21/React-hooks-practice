import React from 'react'
import Counter from './usereducer/count'
import LikeButton from './usereducer/input';
import UserAuthentication from './usereducer/login';
import Clock from './useeffect/clock';
import FavoriteColor from './usestate/color';

const MainComponents = () => {
  return (
    <div>
        <Counter/>
        <LikeButton/>
        <UserAuthentication/>
        <Clock/>
        <FavoriteColor/>
    </div>
  )
}

export default MainComponents;