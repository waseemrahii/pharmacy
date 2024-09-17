
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact/create', formData); // Replace with your backend URL
      if (response.status === 201) {
        toast.success('Message submitted successfully. We will contact you soon!');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <section className="contact-us-form pt-10 mb-10 container">
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2 className='talk font-bold'> Be In Touch With Us To Get Healthy Tips and Gifts</h2>
           
            </div>
            <form className="register-form container" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    First name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="firstName"
                      required
                      placeholder="First name"
                      aria-label="First name"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="mb-1">
                    Last name
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      aria-label="Last name"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="phone" className="mb-1">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="phone"
                      required
                      placeholder="Phone"
                      aria-label="Phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="mb-1">
                    Message
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      id="message"
                      placeholder="Message"
                      aria-label="Message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn  d-block w-100 bg-[#1EBEB6] text-white" style={{border:"none"}}>
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <img
                src="/goldmember.jpeg"
                alt="contact us"
                className="img-fluid h-80 mt-24"

              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
