import React from 'react'
import {Link} from 'react-router-dom';
import vette from '../assets/vette.png';
import '../styles/Home.css'
import '../styles/Footer.css'

function Home() {
  return (
    <div>
      <div className='home' style={{backgroundImage : `url(${vette})`}}
        >
        <div className='headerContainer' >
        
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
