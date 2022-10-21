import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import Img from "../../img/img.png";

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="user">
        {/* <img src={Img} alt="" /> */}
        <div className="p-3">Username</div>
        <div className="p-3">Username</div>
        <div className="p-3">Username</div>
        <div className="p-3">Username</div>
        <div className="p-3">Username</div>
      </div>
    </div>
  )
}

export default Navbar