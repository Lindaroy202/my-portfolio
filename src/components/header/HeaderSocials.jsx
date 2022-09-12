import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FiFacebook} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/linda-awasiri-482536204/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Lindaroy202" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/" target="_blank">< FiFacebook/></a>
    </div>
  )
}

export default HeaderSocials