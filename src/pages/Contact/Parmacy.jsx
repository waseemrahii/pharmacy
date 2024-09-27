
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Contact/ContactForm.css';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
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
      // Send form data to the email (mocking backend)
      const response = await axios.post('https://formspree.io/f/mgednnek', {
        ...formData,
        _replyto: 'wasimrahii98@gmail.com',
        _subject: 'New Contact Message',
      });
      if (response.status === 200) {
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
    <section className="contact-us-form pt-10 mb-10 container" style={{ marginTop: "4rem" }}>
      <div className="container p-10 sm:p-0">
        <div className="row justify-content-lg-between container  flex flex-column-reverse md:flex-row">
         
          <div className="col-lg-5 col-md-10 text- mt-5">
            <h1 className='font-bold mb-3' style={{ fontSize: "2rem", fontFamily: "Poppins" }}>
              Consult a Professional
            </h1>
            <p>
              How often is it that you sometimes need advice, reassurance and information about a condition? Visiting a hospital or GP or making an appointment is often not practical or too time-consuming.
              You can conveniently get access to professional advice and ask questions from home. Try our services and benefit from highly skilled professionals who can provide guidance and support.
            </p>
            <Link to='https://www.medicineshoppe.ca/'>
              <button className='bg-red-600 text-white btn mt-3 w-full'>
                Link To Prescriptions
              </button>
            </Link>
          </div>

          <div className="col-lg-6 col-md-8 mt-5">
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="firstName" className="mb-1">First name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    placeholder="First name"
                    className="form-control w-full"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="lastName" className="mb-1">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    className="form-control w-full"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="phone" className="mb-1">Phone <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    id="phone"
                    required
                    placeholder="Phone"
                    className="form-control w-full"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="email" className="mb-1">Email<span className="text-danger">*</span></label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    className="form-control w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="message" className="mb-1">Ask your Question</label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="form-control w-full"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn d-block w-full bg-[#1EBEB6] text-white" style={{ border: "none" }}>
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Pharmacy;
