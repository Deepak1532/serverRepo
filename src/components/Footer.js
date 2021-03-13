import React from 'react'

function Footer() {
    return (
        <div>
            <div id="mainfooter" className="text-white pt-5 pb-4">
                <div className="container text-center" >
                    <div className="row">
                        <div className=" Name col-md-3">
                            <h4>Company Name</h4><br/>
                            <p>Phone: 9848427330</p>
                            <p style={{paddingLeft:'15px'}}>Email:xyz@gmail.com</p>
                            
                        </div>
                        <div className="Customer col-md-5" id="customer">
                            <h4>Customer Care</h4>
                            <p>
                                <a href="" id="hi" >Products</a>
                            </p>
                            <p>
                                <a href="" id="hi" >Carts</a>
                            </p>
                            <p>
                                <a href="" id="hi" >About Us</a>
                            </p>
                            <p>
                                <a href="" id="hi" >Contact Us</a>
                            </p>
                        
                        </div>
                        
                        <div className="payment col-md-4">
                            <h4>Payment options</h4>
                            <p>
                                <img href="#" class="btn" src="image/esewa.jpg" style={{height:'50px'}} ></img>
                            </p>
                            <p style={{paddingRight:'4px'}}>
                                <img href="#" class="btn " src="image/fonepay.png" style={{height:'50px',width:'95px'}} ></img>
                            </p>
                            <p style={{paddingRight:'8px'}}>
                                <img href="#" class="btn" src="image/khalti.jpg" style={{height:'50px'}} ></img>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="footerid" className=" pt-2 w-100" style={{height:'50px'}}>
                <div className="col">
                    <p>Copyright@xyzMart 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
