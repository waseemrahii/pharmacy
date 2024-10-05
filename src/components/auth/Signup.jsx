import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUpload } from 'react-icons/fa';
import { createVendor } from '../redux/vendorSlice'; // Assuming vendorSlice is in the slices folder
import { toast } from 'react-toastify';

const VendorRegistration = () => {

    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    shopName: '',
    address: '',
    vendorImage: null,
    logo: null,
    banner: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Log all form data for debugging
      Object.keys(formData).forEach((key) => {
        console.log(`${key}: ${formData[key]}`);
      });

      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const actionResult = await dispatch(createVendor(form));

      if (createVendor.fulfilled.match(actionResult)) {
        toast.success('Vendor added successfully!');
        // Reset the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          password: '',
          shopName: '',
          address: '',
          vendorImage: null,
          logo: null,
          banner: null,
        });
        event.target.reset();
      } else {
        throw new Error(actionResult.error.message || 'Failed to add vendor!');
      }
    } catch (error) {
      console.error('Error adding vendor:', error);
      toast.error(error.message || 'Failed to add vendor!');
    }
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (files) {
      handleImageChange(event);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  return (
    <div className="py-5 container mt-24">
      <div className="first-el">
        <section>
          <div className="container">
            <div className="create-an-account p-3 p-sm-4">
              <img
                src="https://6valley.6amtech.com/assets/img/media/form-bg.png"
                alt=""
                className="create-an-accout-bg-img"
              />
              <div className="row flex justify-center ">
                <div className="col-lg-4">
                  <div className="text-center">
                    <h3 className="mb-2 text-capitalize">Join our growing family of health stores</h3>
                    <p>
                      Create your own store. Already have a store?{' '}
                      <a
                        className="text-primary fw-bold"
                        href="https://6valley.6amtech.com/vendor/auth/login"
                      >
                        Login
                      </a>
                    </p>
                    <div className="my-4 text-center">
                      <img
                        width="308"
                        src="/doctor.jpeg"
                        alt=""
                        className="dark-support"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="bg-white p-3 p-sm-4 rounded">
                    <h4 className="mb-4 text text-capitalize">Create an account</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                      <div className="col-sm-6 mb-4 w-full sm:w-1/2">                          <label htmlFor="email">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ex: example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email" // Add autocomplete
                          />
                        </div>
                        <div className="col-sm-6 mb-4 w-full sm:w-1/2">                          <label htmlFor="phoneNumber">
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            autoComplete="tel" // Add autocomplete
                          />
                        </div>
                        <div className="col-sm-6 mb-4 w-full sm:w-1/2">                          <label htmlFor="password">
                            Password
                          </label>
                          <input
                            className="form-control"
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Minimum 8 characters long"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="new-password" // Add autocomplete
                          />
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-sm-6 mb-4 w-full sm:w-1/2">                          <label htmlFor="firstName">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            placeholder="Ex: John"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            autoComplete="given-name" // Add autocomplete
                          />
                        </div>
                        <div className="col-sm-6 mb-4 w-full sm:w-1/2">                          <label htmlFor="lastName">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            placeholder="Ex: Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            autoComplete="family-name" // Add autocomplete
                          />
                        </div>
                        <div className="col-sm-6 d-flex flex-column align-items-center">
                          <div className="upload-file mb-4">
                            <input
                              type="file"
                              className="upload-file__input"
                              name="vendorImage"
                              accept="image/*"
                              onChange={handleChange}
                              required
                            />
                            <div className="upload-file__img">
                              <img
                                src={formData.vendorImage ? URL.createObjectURL(formData.vendorImage) : '#' }
                                className="img-fit-contain border"
                                alt=""
                                hidden={!formData.vendorImage}
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-muted text-capitalize fs-12">Image ratio 1:1</div>
                            <h6 className="text-uppercase mb-1 fs-14">Vendor image</h6>
                          </div>
                        </div>
                      </div>
                      <div className="border p-3 p-xl-4 rounded mt-4">
                        <h4 className="mb-3">Shop information</h4>
                        <div className="row">
                        <div className="col-sm-6 mb-4 w-full sm:w-1/2">                            <label htmlFor="shopName">
                              Shop name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="shopName"
                              name="shopName"
                              placeholder="Enter shop name"
                              value={formData.shopName}
                              onChange={handleChange}
                              required
                              autoComplete="organization" // Add autocomplete
                            />
                          </div>
                          <div className="col-sm-6 mb-4 w-full sm:w-1/2">                            <label htmlFor="address">
                              Address <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Enter address"
                              value={formData.address}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col-sm-6 d-flex flex-column align-items-center">
                            <div className="upload-file mb-4">
                              <input
                                type="file"
                                className="upload-file__input"
                                name="logo"
                                accept="image/*"
                                onChange={handleChange}
                                required
                              />
                              <div className="upload-file__img">
                                <img
                                  src={formData.logo ? URL.createObjectURL(formData.logo) : '#'}
                                  className="img-fit-contain border"
                                  alt=""
                                  hidden={!formData.logo}
                                />
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-muted text-capitalize fs-12">Image ratio 2:1</div>
                              <h6 className="text-uppercase mb-1 fs-14">Logo</h6>
                            </div>
                          </div>
                          <div className="col-sm-6 d-flex flex-column align-items-center">
                            <div className="upload-file mb-4">
                              <input
                                type="file"
                                className="upload-file__input"
                                name="banner"
                                accept="image/*"
                                onChange={handleChange}
                                required
                              />
                              <div className="upload-file__img">
                                <img
                                  src={formData.banner ? URL.createObjectURL(formData.banner) : '#'}
                                  className="img-fit-contain border"
                                  alt=""
                                  hidden={!formData.banner}
                                />
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-muted text-capitalize fs-12">Image ratio 3:1</div>
                              <h6 className="text-uppercase mb-1 fs-14">Banner</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn  bg-[#14B8A6] text-white"
                          onClick={() => console.log('Submit button clicked')} // Debugging
                        >
                          {/* <FaUpload className="me-2" /> */}
                          <span className="text-capitalize">Create</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VendorRegistration;


