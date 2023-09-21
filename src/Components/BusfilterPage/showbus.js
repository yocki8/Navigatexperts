import './showbus.css';
import React from 'react';
import {Link} from "react-router-dom";
import { FaBusAlt } from "react-icons/fa";
// import bus from '../../assets/bus.png';
// import Busfilter from '../Search/busfilter';

const Showbus = () => {
  return (
    <div className="bus-main-cont">
        <div className="bus-sub-cont">
            <div className="bus-heading-cont">
                <p className='bus-main-heading'>Track your Bus </p>
            </div>
            <div className="bus-card">
                
                <div className='bus-left-item'>
                    <div className="bus-time">
                        <div className="arrival">09:00</div>
                        <div className="total">07<span>h</span>50<span>m</span></div>
                        <div className="depart">16:50</div>
                    </div>
                    <div className="bus-route">
                       <div className="source">Ambala</div>
                       <hr className='bus-hr'/>
                       <div className="dest">Manali</div> 
                    </div>
                </div>

                <div className='bus-mid-item'>
                    <div className="bus-logo-bg">
                        <FaBusAlt className='bus-icon'/>
                        <div className="bus-logo-text">HRTC</div>
                    </div>
                </div>

                <div className='bus-right-item'>
                    <Link to='/track'>
                        <button className="bus-track">Track</button>
                    </Link>
                </div>

            </div>

            <div className="bus-card">
                
                <div className='bus-left-item'>
                    <div className="bus-time">
                        <div className="arrival">02:30</div>
                        <div className="total">15<span>h</span>18<span>m</span></div>
                        <div className="depart">23:15</div>
                    </div>
                    <div className="bus-route">
                       <div className="source">Ludhiana</div>
                       <hr className='bus-hr'/>
                       <div className="dest">Delhi</div> 
                    </div>
                </div>

                <div className='bus-mid-item'>
                    <div className="bus-logo-bg">
                        <FaBusAlt className='bus-icon'/>
                        <div className="bus-logo-text">HRTC</div>
                    </div>
                </div>

                <div className='bus-right-item'>
                    <Link to='/track'>
                        <button className="bus-track">Track</button>
                    </Link>
                </div>

            </div>

            <div className="bus-card">
                
                <div className='bus-left-item'>
                    <div className="bus-time">
                        <div className="arrival">12:15</div>
                        <div className="total">03<span>h</span>25<span>m</span></div>
                        <div className="depart">14:20</div>
                    </div>
                    <div className="bus-route">
                       <div className="source">Karnal</div>
                       <hr className='bus-hr'/>
                       <div className="dest">Panipat</div> 
                    </div>
                </div>

                <div className='bus-mid-item'>
                    <div className="bus-logo-bg">
                        <FaBusAlt className='bus-icon'/>
                        <div className="bus-logo-text">HRTC</div>
                    </div>
                </div>

                <div className='bus-right-item'>
                    <Link to='/track'>
                        <button className="bus-track">Track</button>
                    </Link>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Showbus;