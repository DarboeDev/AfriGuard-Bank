import React from 'react'

const Billing = () => {
  return (
   <section className="billing">
      <img className='billing-img' src=".\src\assets\bill.png" alt="" />
    <div className="billing-info">
      <h1>
        Easily contol your billing & invoicing.
      </h1>
      <p>
      Join Afriguard today for effortless billing and invoicing control.
       Our app streamlines processes, allowing easy creation and tracking of invoices. 
       Gain real-time financial insights, all from your device. 
       Download our app now to save time and money while taking charge of your finances.
      </p>
      <div className="billing-links">
      <img src=".\src\assets\apple.svg" alt="" />
      <img src=".\src\assets\google.svg" alt="" />
    </div>
    </div>
   </section>
  )
}

export default Billing