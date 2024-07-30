import brandImage from '../assets/images/detailed-brand.png'
export default function Navbar() {
  return <>
  <div className="navbar">
    <a className="brand" href="">
      <img src={brandImage} />
    </a>
    <div className='nav'>
      <a href=''>Home</a>
      <a href=''>FAQs</a>
      <a href=''>Features</a>
      <a href=''>Pricing</a>
    </div>
    <div className='actions'>
      <a href='' className='get-started'>Get Started</a>
      <a href='' className='login'>Login</a>
    </div>
  </div>
  </>
}