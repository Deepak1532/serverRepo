import React from 'react'
import Card from './Card'
import carddata from './Data'

function Maincard() {
    return (
        <div>
        <div className="container c1">
            <h2 style={{fontSize:'30px',marginBottom:'12px'}}>Your Account</h2>
             <div className="row">
              {carddata.map(item=>
             (
            <Card
            image={item.image}
            title={item.title}
            description={item.description}
            />
            ))

            }
            </div>
            <hr/><br/><br/>
            <div className="maindiv" style={{display:"flex",flexWrap:"wrap",margin:'auto'}}>
            <div className="col-md-4">
                <div className="container cardimage" style={{height:'95%'}}>
                {/* <img src={props.image} className="card-img-top" alt="..."/> */}
                
                    <div className="card-body">
                        <h5 className="card-title">Ordering and shopping preferences</h5>
                        <div className="card-text">
                            <a href="#" className="card-link1">
                            <p>Your addresses</p>
                            <p>Your Payments</p>
                            <p>Your Amazon profile</p>
                            <p>Your achieved order</p>
                            <p>Manage your lists</p>
                            <p>Download order reports</p>
                            <p>1-Click settings</p>
                            <p>Amazon fresh settings</p>
                            <p>Language preferences</p>
                            <p>Manage saved ids</p>
                            <p>Coupons</p>
                            <p>product Vouchers</p>
                            <p>VAT Registration number</p>
                            </a>
                        </div>
                    </div>
                </div>
            
        </div>

        <div className="col-md-4">
                <div className="container cardimage" style={{height:'95%'}}>
                {/* <img src={props.image} className="card-img-top" alt="..."/> */}
                
                    <div className="card-body">
                        <h5 className="card-title">Digital content and devices</h5>
                        <div className="card-text">
                            <a href="#" className="card-link1">
                            <p>Manage content and devices</p>
                            <p>Your apps</p>
                            <p>Prime Video settings</p>
                            <p>Amazon Music settings</p>
                            <p>Manage Amazon Drive and photos</p>
                            <p>Digital games and software</p>
                            <p>Twitch settings</p>
                            <p>Audible settings</p>
                            <p>Amazon Coins</p>
                            <p>Digital gifts you've received</p>
                            <p>Digital and device forum</p>
                            </a>
                        </div>
                    </div>
                </div>
            
        </div>

        <div className="col-md-4">
                <div className="container cardimage" style={{height:'95%'}}>
                {/* <img src={props.image} className="card-img-top" alt="..."/> */}
                
                    <div className="card-body">
                        <h5 className="card-title">Memberships and subscriptions</h5>
                        <div className="card-text">
                            <a href="#" className="card-link1">
                            <p>Kindle Unlimited</p>
                            <p>Prime Video Channels</p>
                            <p>Music Unlimited</p>
                            <p>Subscribe & Save</p>
                            <p>FreeTime Unlimited</p>
                            <p>Audible membership</p>
                            <p>Your Essentials</p>
                            <p>Magazine subscriptions</p>
                            <p>Other subscriptions</p>
                            <p>Manage saved ids</p>
                            <p>Coupons</p>
                            <p>product Vouchers</p>
                            <p>VAT Registration number</p>
                            </a>
                        </div>
                    </div>
                </div>
            
        </div>

        <div className="col-md-4">
                <div className="container cardimage" style={{height:'95%'}}>
                {/* <img src={props.image} className="card-img-top" alt="..."/> */}
                
                    <div className="card-body">
                        <h5 className="card-title">Communication and content</h5>
                        <div className="card-text">
                            <a href="#" className="card-link1">
                            <p>Messages from Amazon and sellers</p>
                            <p>Email subscriptions</p>
                            <p>Advertising preferences</p>
                            <p>Communication preferences</p>
                            <p>Shipment updates via text</p>
                            <p>Alexa shopping notifications</p>
                            <p>Deals Notifications</p>
                            <p>Videos you've uploaded</p>
                           </a>
                        </div>
                    </div>
                </div>
        </div>

        <div className="col-md-4">
                <div className="container cardimage">
                {/* <img src={props.image} className="card-img-top" alt="..."/> */}
                
                    <div className="card-body">
                        <h5 className="card-title">Shopping programs and rentals</h5>
                        <div className="card-text">
                            <a href="#" className="card-link1">
                            <p>Third Party Credit Card Installment</p>
                            <p>Manage Your Profiles</p>
                            <p>Rentals by Amazon</p>
                            <p>Amazon Households</p>
                            <p>Shop the Kids' Store by age</p>
                            <p>No-Rush rewards summary</p>
                            <p>Teens Programs</p>
                            <p>Pet Profiles</p>
                            <p>Shop with Points</p>
                            <p>Amazon Second Chance</p>
                           </a>
                        </div>
                    </div>
                </div>
        </div>

        <div className="col-md-4">
                <div className="container cardimage">
                {/* <img src={props.image} className="card-img-top" alt="..."/> */}
                
                    <div className="card-body">
                        <h5 className="card-title">Other programs</h5>
                        <div className="card-text">
                            <a href="#" className="card-link1">
                            <p>Account Linking</p>
                            <p>Amazon credit cards</p>
                            <p>Your seller account</p>
                            <p>Login with Amazon</p>
                            <p>Amazon Pay</p>
                            <p>Manage your trade-ins</p>
                            <p>Amazon Web Services</p>
                            <p>Amazon tax exemption program</p>
                            <p>Shop with Points</p>
                            <p>Amazon Second Chance</p>
                           </a>
                        </div>
                    </div>
                </div>
        </div>

           
        </div>
        </div>

        <div className="container-fluid bottom">
                <div className="personalize">
                <p>See personalized recommendations</p>
                <button>Sign in </button>
                </div>
            </div>
    </div>    
    )
}

export default Maincard
