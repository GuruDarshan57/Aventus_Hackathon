import React from 'react'
import AI from './brain.json'
import Cybersecurity from './OpenInnovation.json'
import TracksAnimation from './TracksAnimation'
import Web3 from './Blockchain.json'
import "./css/tracks.css";
import ARVR from './IOT.json'
function Tracks() {


  return (
    <div className='text-white w-full h-screen' data-section-name={"s-two"} id={"Tracks"}>
      <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
      </div>
      <div className='tracks'>
      <div className="w-full pt-16">
        <h1 className='container text-3xl py-10 mx-auto px-10 text-center pt-16'> Tracks</h1>
      </div>
      <div className=" track grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4" >
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6" >
            <TracksAnimation animationData={AI} />
            <div className="pt-6 text-center" >
              <h1 className="text-gray-100 text-xl leading-normal mt-0 mb-2">AI & ML</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
          <div className="px-6" >
            <TracksAnimation animationData={Web3} />
            <div className="pt-6 text-center">
              <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Web 3.0</h1>

            </div>
          </div>
        </div>
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
          <div className="px-6" >
            <TracksAnimation animationData={ARVR} />
            <div className="pt-6 text-center">
              <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Game & AR/VR</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <TracksAnimation animationData={Cybersecurity} />
            <div className="pt-6 text-center">
              <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Cyber Intelligence</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
      
  )
}

export default Tracks