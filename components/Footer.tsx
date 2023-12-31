import React from 'react'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mb-10 px-4 text-center text-gray-500 dark:text-white/80'>
      <small className='block mb-2 text-sm'>
        <span>Designed and Built by Jomarie Eliason. &copy;{currentYear} All Rights Reserved. </span>
        <p className='text-sm mt-3'>
          <span className='font-semibold'>About this website:</span>{" "} 
          built with React & Next.js, Typescript, Tailwind CSS, Framer Motion, React Email & Resend.
        </p>
      </small>
    </footer>
  )
}
