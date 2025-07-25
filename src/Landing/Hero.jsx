import './Hero.css'
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
    return (
      <>
        <div className='hero-container'>
          <div className='hero-content'>
            <h1>
              Explore the World, One
              <br/>
              Country at a Time
            </h1>
            <p>
              Discover the history, culture, and beauty of every nation, Sort, search, and
              filter through countries to find the details you need.
            </p>
            <button>Start Exploring<FaArrowRight /></button>
          </div>

          <div className='hero-img'>
            <img src='https://thumbs.dreamstime.com/b/earth-moon-view-space-night-europe-46110305.jpg' alt='Photo'/>
          </div>
        </div>
      </>
    );
  };
  