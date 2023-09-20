import './footer.css'
import React from 'react'
import { BsArrowUpCircle } from "react-icons/bs";


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-footer">
      <div className="sub-footer">
        <p><span>Powered by  </span>NavigateXperts</p>
      </div>
      <div className="sub-footer">
        <BsArrowUpCircle className='to-top-icon' onClick={scrollToTop}/>
        <div className="to-top" onClick={scrollToTop}></div>
      </div>
    </div>
  )
}

export default Footer