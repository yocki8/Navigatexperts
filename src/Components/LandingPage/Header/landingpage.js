import React, { useEffect } from "react";
import "./landingpage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Search/busstops.json";
import { IoLocationSharp, IoHome } from "react-icons/io5";
import Bodycontent from "../Body/bodycontent";

function LandingPage() {
  const [activenum, setActivenum] = useState(false);
  const [activeroute, setActiveroute] = useState(false);
  const [isListening, setIsListening] = useState(false); // Yocki's code
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
  const onGo = (source, destination) => {
    // play with it now
    console.log("source:", source);
    console.log("destination:", destination);
  };

  /*************YOCKI's COde START************** */
  useEffect(() => {
      let timeoutID;
      let mic = document.querySelector(".mic");
      let micMask = document.querySelector(".mic-mask");
      let micIsClicked = () => {
          mic.classList.add("pulse");
      micMask.style.padding = "150vh";
      mic.style.scale = "1.5";
      document.querySelector('body').style.overflow="hidden";
      mic.style.transition = "1s all";
      micMask.style.transition = "1s all";
    };

    const micIsClickedAgain = () => {
      mic.classList.remove("pulse");
      micMask.style.padding = "10px";
      mic.style.scale = "1";
      mic.style.transition = "1s all";
      document.querySelector('body').style.overflow="";
      micMask.style.transition = "1s all";
    };
    
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        const recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition)();
            
            recognition.onresult = (event) => {
                let speaked = "";
                speaked = event.results[0][0].transcript.toLowerCase();
                console.log(speaked);
                
                let indexOfTo = speaked.indexOf("to");
                let speechSource = speaked.slice(0, indexOfTo).toLowerCase().trim();
                let speechDestination = speaked
                .slice(indexOfTo + 3)
                .toLowerCase()
                .trim();
                
                speechSource == "deewana" && (speechSource = "diwana");
                speechDestination == "deewana" && (speechDestination = "diwana");
                const uniqueCities = ["kullu", "manali"];
                const source = document.querySelector(".source-input");
                const destination = document.querySelector(".destination-input");
                if (
          uniqueCities.includes(speechSource) &&
          uniqueCities.includes(speechDestination)
        ) {
          source.value = speechSource;
          destination.value = speechDestination;
        } else {
            console.log("do it properly");
        }
      };
      
      // Event listener for MIC click
      let toggleButton=0;
      mic.addEventListener("click", () => {
          
          if (!toggleButton) {
              // Stop listening
              
              
              console.log(0);
              recognition.start();
              micIsClicked();
              clearTimeout(timeoutID);
              
            } 
        
            else 
            {
                console.log(1);
                recognition.stop();
                micIsClickedAgain();
                
                timeoutID = setTimeout(function () {
                    micIsClickedAgain();
                    recognition.stop();
                }, 5000);
            }
            
        toggleButton = !toggleButton;
        if(toggleButton) setIsListening(true);
        if(toggleButton) setIsListening(false);

      });
    } else {
        // Speech recognition is not supported in this browser
        mic.disabled = true;
        alert("Speech recognition not supported");
    }
}, []);

/*************YOCKI's COde START************** */
return (
    <>
      <div className="main-cont">
        {/* Toggle Container */}
        {/* IMG */}
        {/* <div className="bus-img">
            <img src="https://drive.google.com/file/d/1wQruYyy3wWxuOVSlKwW6M6mpmoPga9gC/view?usp=sharing"   alt="Himachal Bus" />
        </div> */}

        <div className="main-toggle-cont">
          <div
            className={`toggle-switch ${activenum ? "activenum" : ""}`}
            onClick={() => setActivenum(!activenum)}
            >
            <p className="toggle-text">Bus No.</p>
          </div>
          <div
            className={`toggle-switch ${activeroute ? "" : "activeroute"}`}
            onClick={() => setActiveroute(!activeroute)}
            >
            <p className="toggle-text">Bus Route</p>
          </div>
        </div>

        {/* Search Box Container */}
        <div className="sub-cont">
          <div className="left-items">
            <div className="main-source-cont">
              <div className="fields source-f">
                <IoLocationSharp className="icons" />
                <input
                  type="text"
                  className="source-input"
                  placeholder="Source"
                  value={source}
                  onChange={sourceonChange}
                  />
              </div>

              {/* Source Searchbox Suggestion */}
              <div className="source-dropdown">
                {data.bus_stop
                  .filter((item) => {
                      const sourceSearch = source.toLowerCase();
                      const busstop = item.toLowerCase();
                      
                      return (
                          sourceSearch &&
                          busstop.startsWith(sourceSearch) &&
                          busstop !== sourceSearch
                          );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                      onClick={() => sourceonSearch(item)}
                      className="source-dropdown-row"
                      key={item}
                      >
                      {item}
                    </div>
                  ))}
              </div>
            </div>

            <hr className="hr" />

            <div className="main-destination-cont">
              <div className="fields destination-f">
                <IoHome className="icons" />
                <input
                  type="text"
                  className="destination-input"
                  placeholder="Destination"
                  value={destination}
                  onChange={destinationonChange}
                  />
              </div>

              {/* Destination Searchbox Suggestion */}
              <div className="destination-dropdown">
                {data.bus_stop
                  .filter((item) => {
                      const destinationSearch = destination.toLowerCase();
                      const busstop = item.toLowerCase();
                      
                      return (
                          destinationSearch &&
                      busstop.startsWith(destinationSearch) &&
                      busstop !== destinationSearch
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                        <div
                      onClick={() => destinationonSearch(item)}
                      className="dest-dropdown-row"
                      key={item}
                      >
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="right-items">
            <div className="fields Search-btn">
              <Link to="/search">
                <button
                  className="Search"
                  onClick={() => onGo(source, destination)}
                  >
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>

              {/* <!--************YOCKI's COde START**************--> */}
        <div className="micey">
          <button className={`mic ${isListening ? "pulse" : ""}`} type="button">
            <img
              className="mic-image"
              src="https://icones.pro/wp-content/uploads/2022/05/icone-de-podcast-vert.png"
              alt="Microphone"
            />
          </button>
          <div className="mic-mask"></div>
        </div>
      {/* <!--************YOCKI's COde END**************--> */}


      </div>
      <div className="main-body-cont">
        <Bodycontent />
      </div>
    </>
  );
}

export default LandingPage;
