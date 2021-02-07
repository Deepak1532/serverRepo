import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6" className="links">
            <h5 className="title">Go to</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.twitter.com">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com">Gallery</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.mypage.com">Home</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;