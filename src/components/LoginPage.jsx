import React from 'react'
import { FaGoogle, FaFacebookF, FaApple, FaEnvelope, FaTimes} from 'react-icons/fa'

const LoginPage = () => {
    

  return (
    <div className='w-full  sm:h-screen  flex items-center justify-center  sm:p-10 bg-white'>
      <div className='bg-white border-2 border-blue-200 px-10 sm:p-4  mt-32 sm:mt-0 rounded-lg shadow-md w-[90%] sm:w-2/3'>
      <div className='flex items-center justify-start space-x-9  sm:space-x-[17rem] mb-4'>
        <button>
           <FaTimes className='opacity-30 text-2xl '/>
        </button>
             <h1 className='text-2xl font-bold'>Log in</h1>
        </div>
        <hr  className=' mb-3'/>
        {/* Form start from here */}
        <form className='pt-3'>
        <div>
  <input
    type='email'
    id='email'
    className='w-full px-3 py-2 border border-black/25 rounded-md hover:border-blue-300 focus:outline-none focus:border-blue-400'
    placeholder='Phone Number or Email Address'
  />
</div>

<div>
  <input
    type='password'
    id='password'
    className='w-full px-3 py-2 border border-black/25 rounded-md hover:border-blue-300 focus:outline-none focus:border-blue-400'
    placeholder='Password'
  />
</div>

          <button
            type='submit'
            className='w-full mt-6 bg-blue-400 text-white py-2 rounded-md font-semibold hover:bg-blue-600'
          >
            Continue
          </button>
        </form>

        
        <div className='flex items-center justify-center my-6'>
          <hr className='flex-grow border-gray-300' />
          <span className='px-3 text-gray-500'>Or</span>
          <hr className='flex-grow border-gray-300' />
        </div>

         {/* Social Login Buttons are starting from here */}
         <div className='space-y-3'>
          <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
            <button className='w-full flex items-center justify-start pl-4 bg-gray-100 border border-black/25 py-3 rounded-md text-sm font-medium hover:bg-gray-200'>
              <FaEnvelope className='mr-2 text-2xl' /> Login with Email
            </button>
            <button className='w-full flex items-center justify-start pl-4 bg-gray-100 border border-black/25 text-black py-3 rounded-md text-sm font-medium hover:bg-gray-200'>
              <FaGoogle className='mr-2 text-2xl text-[#DB4437]' /> Login with Google
            </button>
          </div>

          <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
            <button className='w-full flex items-center justify-start pl-4 bg-gray-100 border border-black/25 text-black py-3 rounded-md text-sm font-medium hover:bg-gray-200'>
              <FaFacebookF className='mr-2 text-2xl text-blue-500' /> Login with Facebook
            </button>
            <button className='w-full flex items-center justify-start pl-4 bg-gray-100 border border-black/25 text-black py-3 rounded-md text-sm font-medium hover:bg-gray-200'>
              <FaApple className='mr-2 text-2xl' /> Login with Apple
            </button>
          </div>
          <h1 className='text-black/45 sm:font-semibold mb-3 sm:mb-3'>Don't have an account? <a href="#" className='underline underline-offset-1 text-black' >Create an Account</a></h1>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
