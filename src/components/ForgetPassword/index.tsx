import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthState } from '../../utils/type';
import '../SignIn/style.css';

interface SignUpFormProps{
  handleAuthState: (authState: AuthState) => void;
}

const ForgetPasswordForm: React.FC<SignUpFormProps> = (props) => {
    const {
      handleAuthState
    } = props;
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required')
        }),
        onSubmit: async (values) => {
        },
  });
  return (
    <div >
      <p className='text-styled auth-header-text pb-2'>Forget Password</p>
      <form
      onSubmit={formik.handleSubmit}
      className='auth-form rounded-[2px] border-black border-2 p-6 flex flex-col w-96 items-start'
    >
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className='border-2 h-10 p-2 w-full'
        placeholder='Email'
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='text-red-500 pb-2'>{formik.errors.email}</div>
      ) : null}
      <button type='submit' className='flex justify-center items-center mt-2'>
        Send Password Retrival Link
    </button>
    <p className='mt-4 center'>Remember password? <b className='text-styled auth-fot-text' onClick={() => handleAuthState(AuthState.Login)}>Login Now</b></p>
    </form>
    </div>
  )
}

export default ForgetPasswordForm;
