import React from 'react'
import useLocoScroll from '../hooks/useLocoScroll'
import Slides from '../components/Slides'
import flowerImg from '../images/flower.png'


const Card = ({ cardid,image,bg }) => {
  const showCard = () => {
    document.getElementById(`card${cardid}`).style.transform = "none";
    setTimeout(()=>{
      document.getElementById(`cardcontent${cardid}`).style.opacity = "1";
    },"1000")
    
  }
  const hideCard = () => {
    document.getElementById(`cardcontent${cardid}`).style.opacity = "0";
    setTimeout(()=>{
      document.getElementById(`card${cardid}`).style.transform = "translateX(100%)";
    },"1000")
  }
  return (
    <>
      <div className='card'>
        <div className='card-bg' onClick={showCard}>
          <img src={image}></img>
        </div>
        <div className='cc-logo'>
          <img src='https://see.fontimg.com/api/renderfont4/OoAd/eyJyIjoiZnMiLCJoIjo0NiwidyI6MTI1MCwiZnMiOjM3LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiIzg3MjgyOCIsInQiOjF9/c2ltcGxl/san-frediano.png'></img>
        </div>
        <div className='card-content-container' id={`card${cardid}`} 
        style={{ backgroundColor: bg}}
        >
          <div className='card-content' id={`cardcontent${cardid}`}>
            <div className='cc-upper'>
              <div className='cc-tags'>
                <span>UI design</span>
                <span>E-Commerce</span>
              </div>
              <div className='cc-close' onClick={hideCard}>
                X
              </div>
            </div>
            <div className='cc-mid'>
              <p className='cc-head'>E-commerce</p>
              <p className='cc-text'>We’ve crafted an e-commerce platform that categorizes diverse collections. it unlocks quick access to art pieces and is designed with cutting-edge Shopify technologies as well as UX configurations to maximise the shopping experience.</p>
            </div>
            <div className='cc-lower'>
              <div className='button'>Link -</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Home = () => {
  useLocoScroll()
  return (
    <div data-scroll-container id='main-container'>
      <section data-scroll-section>
        <div className='hero'>
          <nav>
            <div>About</div>
            <div>Contact</div>
            <div>Work</div>
          </nav>
          <div id='headtext' className='sections'>
            <div id='headleft'>
              <div className='h1 fheading' data-scroll data-scroll-speed='1'>Tushar &lt;3</div>
              <div className='h1 fheading2' data-scroll data-scroll-speed='1'> Ga</div>
            </div>
            <div id='headright' data-scroll data-scroll-speed='2'>
              <p>Sample text for<br />
                Sample text for the right side early-stage<br />
                tailored to empower startups, founders, and creators.
              </p>
            </div>
          </div>
        </div>
        <Slides />
        <div className='sections'>
          <div className='section1'>
            <div className='h1'>Some dumb text</div>
            <p>It’s natural to want to ge that what you felt for this person would be reciprocated and lead to an enjoyable relationship. It’s not realistic to expect yourself to feel differently overnight,” Henry says.</p>
            <div className='button'>See More</div>
          </div>
          <div className='cards'>
            <div data-scroll data-scroll-speed='1' data className='cardleft'>
              <Card cardid={1} bg={'#c7dca2f1'} image={'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
              <Card cardid={2} bg={'#eb756af1'} image={'https://images.unsplash.com/photo-1552806969-3eeb819976a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'}/>
              <Card cardid={3} bg={'#cca99bf1'} image={'https://images.unsplash.com/photo-1706549717451-759b9a588511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
            </div>
            <div className='cardright'>
              <Card cardid={4} bg={'#ce9d74ed'} image={'https://images.unsplash.com/photo-1485565036208-bcf966c955a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
              <Card cardid={5} bg={'#dcdca2f1'}image={'https://images.unsplash.com/uploads/14122621859313b34d52b/37e28531?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
            </div>
          </div>
        </div>
        <div className='sections section3'>
          <div className='h6'>Motive</div>
          <div className='h1 midheading'>we design brands and products that resonate with your target audience.</div>
          <div className='h6 text-right'>Your Brand</div>
          <div className='h6'>Your Brand</div>
          <div className='h6'>Your Brand</div>
          <div className='h6'>Your Brand</div>
          <div className='h6'>Your Brand</div>
        </div>
        <div className='skills'>
          <div className='sections'>
            <div>
            <div className='h6'>Capabilities</div>
            </div>
            <div>
              <div className='h6'>brand identity</div>
              <div className='h6'>Web design and development</div>
            </div>
            <div>
              <div className='h6'>technologies</div>
              <div className='h6'>mern stack</div>
            </div>
            <div>
              <div className='h6'>Data Science</div>
              <div className='h6'>mongoDB</div>
            </div>
            <div>
              <div className='h6'>Machine Learning</div>
              <div className='h6'>Artificial Intelligence</div>
            </div>
            <div>
              <div className='h6'>Digital Marketing</div>
              <div className='h6'>E-commerce</div>
            </div>
            <div>
              <div className='h6'>Consulting</div>
              <div className='h6'>Product Management</div>
            </div><div>
              <div className='h6'>Your Brand</div>
              <div className='h6'>Your Brand</div>
            </div>
            <hr/>
          </div>
        </div>
        <div className='last'>
          <div className='sections'>
            <div className='lastContent'>
              <div>By analyzing the present, we build the future.We have one mission: to elevate your brand.
                <br /><br /><br />
                lol studio
                <br /><br /><br /><div className='button'>See More</div></div>
            </div>
          </div>
          <div className='footer'>
            <div>
              Tushar Gautam
            </div>
            <div>
              2024
            </div>
          </div>
          {/* <div className='endimg'><img data-scroll data-scroll-speed='3' src={flowerImg}></img></div> */}
        </div>
      </section>
    </div>
  )
}

export default Home