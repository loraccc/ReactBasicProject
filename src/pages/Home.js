import React from 'react'
import {Link} from 'react-router-dom';
import Heart from '../assets/heart.png'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <div className='home'>
        <div className='headerContainer' 
        style={{backgroundImage : `url(${Heart})`}}
        >
          <h1>Carol's Cars</h1>
          <p>Cars for any Personality !!!</p>
          
            <Link to='/menu'>
            <button>
              Order Now
              </button>
              </Link>
          


        </div>


      </div>
    </div>
  )
}

export default Home;
