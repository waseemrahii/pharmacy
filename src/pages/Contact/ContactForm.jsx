import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const response = await axios.post('http://localhost:5000/api/contact/create', formData); 
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
              {/* Adjust text size for small screens */}
              <h2 className="font-bold text-center text-md-start mb-4 text-2xl md:text-4xl">
                Be In Touch With Us To Get Healthy Tips and Gifts
              </h2>
            </div>
            <form className="register-form container" onSubmit={handleSubmit}>
              <div className="row">
                {/* Stack fields on small screens */}
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="firstName" className="mb-1">
                    First name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    placeholder="First name"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="lastName" className="mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="phone" className="mb-1">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    placeholder="Phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="email" className="mb-1">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="message" className="mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn d-block w-100 bg-[#1EBEB6] text-white"
                    style={{ border: "none" }}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-10 mx-auto md:mx-0">
  <div className="contact-us-img">
    <img
      src="/goldmember.jpeg"
      alt="contact us"
      className="img-fluid h-80 w-full mt-6 md:mt-24"
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
