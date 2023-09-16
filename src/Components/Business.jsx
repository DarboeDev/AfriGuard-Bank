import React from 'react'

const Business = () => {
  return (
    <section className="business">
      <div className="business-main">
        <h1>Unlock Financial Freedom with <span className="afriguard">AfriGuard!</span></h1>
        <p>At AfriGuard, we're more than just a bank;
           we're your financial ally on the path to success. 
           Join our ever-growing community of satisfied customers who have harnessed the power of smart banking.
           Discover the future of banking in Africa – it starts here!</p>
            <button className='btn'>Join Us</button>
      </div>
      <div className="business-tabs">
        <div className="tab ">
         <img src="./src/assets/secure.svg" alt="" className='tab-img' />
         <div className="text">
          <h4>Secure Banking</h4>
          <p>We've implemented state-of-the-art security measures to ensure
              your financial information is always safe and protected. 
            You can rest easy knowing that your accounts and transactions are in good hands.</p>
         </div>
        </div>
        <div className="tab">
        <img src="./src/assets/freedom.svg" alt="" className='tab-img' />
         <div className="text">
          <h4>Financial Freedom</h4>
          <p>You'll have access to a wide range of tailored financial solutions
             designed to help you achieve your goals. Whether you're saving for the future,
              investing, or planning for major life events.</p>
         </div>
        </div>
        <div className="tab">
        <img src="./src/assets/time.svg" alt="" className='tab-img' />
         <div className="text">
          <h4>24/7 Access</h4>
          <p>Afriguard offers round-the-clock banking services, 
            giving you the flexibility to manage your finances on your schedule. 
            We're here for you 24/7.</p>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Business