import React from 'react'
import Header from './Header'
import Footer from './Footer'
import overview from "../assets/overview.avif"
function Overview() {
  return (
    <>
    <Header/>
    <div class="row row-cols-2 g-3">
        <div class="col">
            <div class="card">
                <img src={overview} class="card-img-top" alt="..."/> 
                <div class="card-body">
                    {/* <h4 class="card-title"><b className='Over'>Call</b></h4>
                    <p className='number'>+91 8521474521</p>
                    <p class="card-text">
                    <h4><b className='Over'>Direction</b></h4>
                    <p className='fullAddress'>2nd Floor,Railway Bridge Road,South Circle Diamond park south,Opposite Hospital,Donimalai
                    </p>
                    </p> */}
                </div>
            </div>
        </div>
   
    <div> 
        <p className='Over'><b>People Say This Place is Know For</b> </p>
        <p>Food Tastes Great,Healthy and Delicious,Value for Money,Packaging,Taste,Food</p>
        <div> 
            <p className='Over'><b>Average Cost</b> </p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>150 for one order(approx)</p>
        </div>
        <div> 
        <p className='Over'><b>More Info </b></p>
        <p className='infooverview'><svg xmlns="http://www.w3.org/2000/svg"color='green' width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>  Delivery Only</p>
        <p className='infooverview'><svg xmlns="http://www.w3.org/2000/svg" color='red' width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
        </svg>  No Seating Available</p>
        <p className='infooverview'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>  Donimalia</p>
        <p className='infooverview'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='blue' fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg> +91 8521474521</p>
        
        <div>
        <p className='Over'><b>Review </b></p>
        </div>
        
	    <div class="card card-inner">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                    	<p class="text-secondary text-center">15 Minutes Ago</p>
                    </div>
                    <div class="col-md-10">
                    	<p><strong>Sunil Kumar</strong></p>
                    	<p>Service: Delivery</p>
                        <p>Price per person: ₹200–400</p>
                        <p>Recommended dishes: Veg Thali<br/><br/>
                    	    
                            <span class="heading">User Rating</span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                    	</p>
                    </div>
                </div>
            </div>
	    </div>
<a href='/review' className='readmoreLink'>read more</a>
        </div>
         
    </div>
   
</div>
    <Footer/>
    </>
    
  )
}

export default Overview