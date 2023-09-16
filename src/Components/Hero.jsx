import React from 'react'

const Hero = () => {
  return (
    <main className='hero'>
        <div className="hero-info">
            <h1 className="hero-title">
            Welcome to <span className='afriguard'>AfriGuard</span> Bank
            </h1>
            <p className="hero-slogan">
            Your Trusted Financial Partner in Africa
            </p>
            <p className="hero-desc">
            Welcome to AfriGuard Bank, where your financial aspirations come to life.
             We're committed to providing you with secure, innovative, and personalized banking
              solutions designed to empower you on your financial journey. Join us today and experience the future of banking.
            </p>
            <button>Get Started</button>
        </div>
        <div className="hero-gif">
            <img src="./src/assets/Wallet-pana.svg" className='hero-gif' alt="" />
        </div>
    </main>
  )
}

export default Hero