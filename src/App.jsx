import Navbar from './components/navbar'

import heroImage from './assets/images/hero.svg'

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <div className='hero'>
        <p className='text'>See the adspend and revenue of Ads. Every Tiktok and Facebook ad in your hands.</p>
        <h1 className='title'>ALL-IN-ONE SPY TOOL</h1>
        <h1 className='title'>Find Winning Products & Ads In Seconds</h1>
        <p className='text'>See any store's revenue with our accurate sales tracker. Stop guessing, test proven concepts</p>
        <div className='actions'>
          <a href='' className='get-started'>Get Started For Free</a>
        </div>
        <div className='image'>
          <img src={heroImage} />
        </div>
      </div>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <img src='' />
            <div className=''>
              <h3 className='title'></h3>
              <div className='body'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
