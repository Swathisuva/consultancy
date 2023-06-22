import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import ReactWhatsapp from "react-whatsapp";
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/chakravarthymtp' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          
          <a href='https://www.instagram.com/chakravarthy_thuhil_maaligai/?igshid=YmMyMTA2M2Y%3D' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>

          {/* <a href='https://www.instagram.com/chakravarthy_thuhil_maaligai/?igshid=YmMyMTA2M2Y%3D' className='me-4 text-reset'> */}
            
            <ReactWhatsapp number='+91 9344960429'  message='Chakravarthy Thuhil Maaligai'><MDBIcon fab icon="whatsapp" /></ReactWhatsapp>
          {/* </a> */}
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="logo.jpg" className="me-3" />
                Chakravarthy Thuhil Maaligai
              </h6>
              <p>
                Clothing since <b>1969.</b>We are dedicated to providing exceptional customer service, and our friendly and knowledgeable staff is always available to assist you with any questions or concerns. Whether you're looking for the latest fashion trends or simply want to update your wardrobe, we're here to help.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Policies</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:'none'}}>
                  Privacy Policy
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Branches</h6>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:'none'}}>
                  Mettupalayam
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:'none'}}>
                  Ooty
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'style={{textDecoration:'none'}}>
                  Gobichettipalayam
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" /><div>
                Sathy Road, Gobichettipalayam,<br/>  Tamil Nadu 638476</div>
              </p>
              <p>
               <MDBIcon icon="envelope" className="me-3 "  />chakravarthy.customercare@gmail.com
                
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 81227 67373
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'style={{textDecoration:'none'}}>
          abc
        </a>
      </div>
    </MDBFooter>
  );
}
