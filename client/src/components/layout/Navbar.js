import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header className="header clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-1 col-lg-1">
            
            <div className="logo clearfix">
              <Link to="index"><img className="img-responsive" src="./images/logo.png" alt="logo img" /> </Link>
            </div>
           
            <div className="h-right clearfix visible-xs visible-sm hidden-md hidden-lg">
              <div className="h-balance clearfix">
                <Link to="#"> Agency Detail
                 
                  <div className="h-balance-popup hidden clearfix">
                    <div className="balance-block clearfix">
                      <h4>Sales</h4>
                      <p>Name:<span>Mr. Amit Patel</span></p>
                      <p>Mobile:<span>+ 91 98389 878222</span></p>
                      <p>Email: <span>sales@gmail.com</span></p>
                    </div>
    
                    <div className="balance-block clearfix">
                      <h4>Air</h4>
                      <p>Name:<span>Mr. Amit Patel</span></p>
                      <p>Mobile:<span>+ 91 98389 878222</span></p>
                      <p>Email: <span>sales@gmail.com</span></p>
                    </div>
    
                    <div className="balance-block clearfix">
                      <h4>Hotal</h4>
                      <p>Name:<span>Mr. Amit Patel</span></p>
                      <p>Mobile:<span>+ 91 98389 878222</span></p>
                      <p>Email: <span>sales@gmail.com</span></p>
                    </div>
                  </div>
                 
                </Link>
              </div>
              <div className="h-user clearfix">
                <Link to="#">
                  <div className="h-user-img clearfix">
                    <img className="img-responsive" src="../images/user-img.png" alt="user img" />
                  </div>
                  <div className="h-user-name clearfix">
                    <h6>Mansi Vyas</h6>
                  </div>
                </Link>
              </div>
            </div>
          
          </div>
          <div className="col-sm-12 col-md-11 col-lg-11">
            <div className="header-right clearfix">
            
              <div className="h-menu clearfix">
                <div className="navbar navbar-default" role="navigation">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                      data-target=".navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li><Link to="#">Flight</Link></li>
                      <li><Link to="#">Visa</Link></li>
                      <li><Link to="#">Group Booking<span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                          <li><Link to="#">International</Link></li>
                          <li><Link to="#">Domestic</Link></li>
                          <li><Link to="#">Cruise</Link></li>
                        </ul>
                      </li>
                      <li><Link to="#">Forex</Link></li>
                      <li><Link to="#">Cab</Link></li>
                      <li><Link to="#">Contact Your Representative</Link></li>
                    </ul>
                  </div>
                 
                </div>
              </div>
         
    
             
              <div className="h-right clearfix hidden-xs  hidden-sm visible-md visible-lg">
                <div className="h-balance clearfix">
                  <Link to="#"> Agency Detail
                   
                    <div className="h-balance-popup hidden clearfix">
                      <div className="balance-block clearfix">
                        <h4> Agency Balance : Rs.50000</h4>
                      </div>
                    </div>
                   
                  </Link>
                </div>
                <div className="h-user clearfix">
                  <Link to="#">
                    <div className="h-user-img clearfix">
                      <img className="img-responsive" src="../images/user-img.png" alt="user img" />
                    </div>
                    <div className="h-user-name clearfix">
                      <h6>Mansi Vyas</h6>
                    </div>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
    )
  }
}

export default Navbar;
