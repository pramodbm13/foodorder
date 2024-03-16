import React, { useState } from 'react'

function Footer() {

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[list,setList]=useState([]);

function handleData()
{
    setList(...list,email);
    console.log(email);
    setEmail("");
    setList(...list,password);
    console.log(password);
    setPassword("");

}
  return (
    <>
    <footer class="site-footer">
        <div class="container">
            <div class="row">
    
                <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
                  
                  <p>Our Location</p>
                  <p>Registered address- </p>
                  <p>
                    Mama's KITCHENS
                    Donimalai Type 3 335 south block 
                    Donimalai Township Bellary district,Karnataka,583118, </p><p>
                    Mamaskitcheninfo@gmail.com</p>
                </div>
                <div class="col">
                    <p>Quick Link</p>
                    <a href="/overview">Overview</a><br/>
    
                    <a  href="/cart">Cart</a><br/>
    
                    <a  href="/orderonline">Orderonline</a><br/>

                    <a  href="/review">Review</a><br/>
                </div>
                <div class="col-md col-sm-6 col--12">
                <div className='right-card'>
                <div class="col">
                    <p>Contact Us</p>
                    <input type='email'  className='contact-email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                    <textarea type='text' className="contact-message" value={password} placeholder='Message' onChange={(e)=>setPassword(e.target.value)} /><br/>
                    <input type='submit' onClick={handleData}/>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <hr/>
      <div class="container">
        <div class="row">
          <div class="App">
            <p>We are here to help you. Call us at 07700050050</p>
          </div>

          {/* <div class="col-md-4 col-sm-6 col-xs-12">
            <p>pramod</p>
          </div> */}
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer