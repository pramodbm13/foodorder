import React from 'react'
import Header from './Header'
import Footer from './Footer'


function Review() {
  return (
    <>
    <Header/>
    <div class="row row-cols-9 g-3">
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


        <div class="card card-inner">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                    	<p class="text-secondary text-center">10 Hours Ago</p>
                    </div>
                    <div class="col-md-10">
                    	<p><strong> Akash</strong></p>
                    	<p>Packing was very perfect. typical simple Andhra meals derveried with love.. I am happy.<br/><br/>
                    	    
                            <span class="heading">User Rating</span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                    	</p>
                    </div>
                </div>
            </div>
	    </div>

        
        <div class="card card-inner">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                    	<p class="text-secondary text-center">13 days ago</p>
                    </div>
                    <div class="col-md-10">
                    	<p><strong> Samrudh</strong><br/><br/>
                    	    
                            <span class="heading">User Rating</span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                    	</p>
                    </div>
                </div>
            </div>
	    </div>
        
        <div class="card card-inner">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                    	<p class="text-secondary text-center">one month ago</p>
                    </div>
                    <div class="col-md-10">
                    	<p><strong> Harsha</strong></p>
                        <p>I have ordered most of my Authentic Andhra cravings from here for almost a year. They never fail to surprise me with their delivery, service and sweet freebies they throw in now and then. Thank you team ❤️I have ordered most of my Authentic Andhra cravings from here for almost a year. They never fail to surprise me with their delivery, service and sweet freebies they throw in now and then. Thank you team ❤️<br/><br/>
                    	
                            <span class="heading">User Rating</span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                    	</p>
                    </div>
                </div>
            </div>
	    </div>

        </div>
    



    <Footer/>
    </>
    
  )
}

export default Review