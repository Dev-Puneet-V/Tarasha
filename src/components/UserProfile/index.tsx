import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';
import { useAuth } from '../../contexts/AuthContext';

const UserProfile: React.FC = () => {
  const {user} = useAuth();
  console.log(user)
  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      phoneNumber: '123-456-7890'
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be a 10-digit number')
      .required('Phone number is required')
    }),
    onSubmit: (values) => {
      // You can send a request to update the user's profile data to the server here
      console.log('User data submitted:', values);
    },
  });

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="error">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
