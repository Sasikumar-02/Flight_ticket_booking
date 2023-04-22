import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles/Contact.css";
import Footer from "./Footer";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
const Contact = () => {
    const [data, setData] = useState({});
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    useEffect(() => {
      Axios.get('http://localhost:5000/getreview').then((resp) =>
        setData({ ...resp.data[0] }),
      );
      Axios.get('http://localhost:5000/getreview').then((resp) =>
        setData1({ ...resp.data[1] }),
      );
      Axios.get('http://localhost:5000/getreview').then((resp) =>
        setData2({ ...resp.data[2] }),
      );
    }, []);
  return (
    <div>
      <section className="" >
        <div
          className="row py-4"
          style={{ backgroundColor: "rgb(246, 246, 246)" }}
        >
          <div className="col-lg-12 align-items-center d-flex justify-content-center">
            <h2 /*style={{marginRight:'-310%'}}*/>Contact Us</h2>
          </div>
        </div>
      </section>

      <section className="poppins">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <h2 style={{marginTop:'20px'}}>How to find us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center grey-text">
              <h5><strong>Address and Direction</strong></h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" style={{margin:'0'}}>
            <img src={require('../../images/contact.jpg')} style={{marginTop:'50px',marginLeft:'20px',marginRight:'0',borderRadius:'20px'}} width="850" height="550" />
          </div>

          <div className="col-lg-6" style={{ paddingTop: "50px" }}>
            <div className="row">
              {/* <div className="col-lg-1">
                <img src="marker.png" height="20px" width="20px" />
              </div> */}
              <div className="col-lg-6" style={{marginLeft:'0', paddingLeft:"50px"}}>
                
                <b style={{fontSize:'25px'}}>Our Address</b>
                <br />
                <p  style={{fontSize:'20px', color:"black"}}>Bannari Amman Institute of Technology, Aluthukombai post, Sathyamangalam, Erode, Tamilnadu - 638401</p>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-lg-1">
                <img src="mobile-notch.png" height="20px" width="20px" />
              </div> */}
              <div className="col-lg-6" style={{marginLeft:'0', paddingLeft:"50px"}}>
                {" "}
                <b style={{fontSize:'25px'}}>Phone</b>
                <br />
                <p style={{fontSize:'20px', color:"black"}}>9789113517</p>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-lg-1">
                <img src="time-check.png" height="20px" width="20px" />
              </div> */}
              <div className="col-lg-6" style={{marginLeft:'0', paddingLeft:"50px"}}>
                {" "}
                <b style={{fontSize:'25px'}}>Open Hours</b>
                <br />
                <p style={{fontSize:'20px', color:"black"}}>Mon-Sat 8:00am-4:30pm</p>
              </div>
            </div>
            <br />
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ fontSize: "25px" ,width:'500px'}}
              >
                Contact Us
              </button>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <form>
                      <div className="mb-3 mt-4">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="patName"
                        />
                      </div>
                      <div className="mb-3 mt-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                        />
                      </div>
                      <div className="mb-3 mt-4">
                        <label className="form-label">Message</label>
                        <input
                          type="text"
                          className="form-control"
                          name="message"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <section className="poppins">
        <div className="row">
          <div className="col-lg-6 align-items-center d-flex justify-content-center">
            <div
              className="white border-0 text-center"
              style={{ width: "35rem" }}
            >
              <h2>Our Address</h2>
              <h5>Providing a free visit of our Airways and Offices</h5>
            </div>
          </div>

          <div className="col-lg-6 align-items-center d-flex justify-content-center" style={{width:'1200px',margin:'0'}}>
            <MDBRow className="w-100" >
              <MDBCol lg="6" className="my-4" style={{marginLeft:"300px"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.763008162312!2d77.27491371448191!3d11.497012591834988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9215d6d1b28f9%3A0xf48946a7dfcfeb1a!2sBannari%20Amman%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1677480110277!5m2!1sen!2sus"
                  className="w-250"
                  height="600"
                  width="800"
                  loading="lazy"
                ></iframe>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
