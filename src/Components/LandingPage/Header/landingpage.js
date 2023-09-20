import React from 'react'
import './landingpage.css';
import {useState} from 'react';
import {Link} from "react-router-dom";
import data from '../../Search/busstops.json';
import { IoLocationSharp,IoHome } from "react-icons/io5";
import Bodycontent from '../Body/bodycontent';


function LandingPage(){
    const [activenum, setActivenum] = useState(false);
    const [activeroute, setActiveroute] = useState(false);
    
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    const sourceonChange = (event) => {
        setSource(event.target.value);
    };
    const destinationonChange = (event) => {
        setDestination(event.target.value);
    };
    const sourceonSearch = (source) => {
        setSource(source);
        console.log("source:", source);
    };
    const destinationonSearch = (destination) => {
        setDestination(destination);
        console.log("destination:", destination);
    };
    const onGo = (source,destination) => {
        // play with it now
        console.log("source:", source);
        console.log("destination:", destination);
    };

  return (<>
      <div className="main-cont">

        {/* Toggle Container */}
        {/* IMG */}
        {/* <div className="bus-img">
            <img src="https://drive.google.com/file/d/1wQruYyy3wWxuOVSlKwW6M6mpmoPga9gC/view?usp=sharing"   alt="Himachal Bus" />
        </div> */}

        <div className="main-toggle-cont">

            <div className={`toggle-switch ${activenum ? "activenum" : ""}`} onClick={() => setActivenum(!activenum)}>
                <p className="toggle-text">Bus No.</p>
            </div>
            <div className={`toggle-switch ${activeroute ? "" : "activeroute"}`} onClick={() => setActiveroute(!activeroute)}>
                <p className="toggle-text">Bus Route</p>
            </div>
        </div>

        {/* Search Box Container */}
        <div className="sub-cont">
            <div className="left-items">

                <div className="main-source-cont">

                    <div className="fields source-f">
                        <IoLocationSharp className='icons'/>
                        <input type="text" className="source-input" placeholder='Source' value={source} onChange={sourceonChange}/>
                    </div>

                    {/* Source Searchbox Suggestion */}
                    <div className="source-dropdown">
                    {data.bus_stop.filter((item) => {
                        const sourceSearch = source.toLowerCase();
                        const busstop = item.toLowerCase();

                        return (
                            sourceSearch &&
                            busstop.startsWith(sourceSearch) &&
                            busstop !== sourceSearch
                        );
                        }).slice(0, 10).map((item) => (
                        <div onClick={() => sourceonSearch(item)} className="source-dropdown-row" key={item}>
                            {item}
                        </div>
                        ))}
                    </div>
                </div>
                
                <hr className="hr" />        
                
                <div className="main-destination-cont">

                    <div className="fields destination-f">
                        <IoHome className='icons'/>
                        <input type="text" className="destination-input" placeholder='Destination' value={destination} onChange={destinationonChange}/>
                    </div>
                    
                    {/* Destination Searchbox Suggestion */}
                    <div className="destination-dropdown">
                    {data.bus_stop.filter((item) => {
                        const destinationSearch = destination.toLowerCase();
                        const busstop = item.toLowerCase();

                        return (
                            destinationSearch &&
                            busstop.startsWith(destinationSearch) &&
                            busstop !== destinationSearch
                        );
                        }).slice(0, 10).map((item) => (
                        <div onClick={() => destinationonSearch(item)} className="dest-dropdown-row" key={item}>
                            {item}
                        </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="right-items">
                <div className="fields Search-btn">
                <Link to="/search">
                    <button className="Search" onClick={() => onGo(source,destination)}>Search</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className="main-body-cont">
        <Bodycontent/>
    </div>
</>
  )
}

export default LandingPage;