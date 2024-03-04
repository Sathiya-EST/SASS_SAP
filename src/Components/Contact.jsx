import React from 'react'
import Location from '../assets/svg/Location'
import Call from '../assets/svg/Call'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact--details'>
        <div>
          <p className='contact--details-country'>India</p>
          <div className='contact--details-location'>
            <Location className='contact--details-icon' />
            <div>
              <p>The Dive Club , Field No.80 & 71 ,God's Own Villa,</p>
              <p>Sholinganallur, Chennai,TamilNadu . </p>
            </div>
          </div>
          <div className='contact--details-call mt-2'>
            <Call className='contact--details-icon-call' />
            <p>+91 9876544679</p>
          </div>
        </div>
        <div className='mt-3'>
          <p className='contact--details-country'>UAE</p>
          <div className='contact--details-location'>
            <Location className='contact--details-icon' />
            <div>
              <p>Techmash Solutions LLC, Sharjah Media City,</p>
              <p>(SHAMS), P.O. Box 515000, Sharjah, UAE. </p>
            </div>
          </div>
          <div className='contact--details-call mt-2'>
            <Call className='contact--details-icon-call' />
            <p>+971 55 657 1710</p>
          </div>
        </div>
        <div className='mt-3'>
          <p className='contact--details-country'>Qatar</p>
          <div className='contact--details-location'>
            <Location className='contact--details-icon' />
            <div>
              <p>511 Retaj Business Center , B Ring Road, Rawdat Al,</p>
              <p>Khail , Doha ,Qatar.</p>
            </div>
          </div>
          <div className='contact--details-call mt-2'>
            <Call className='contact--details-icon-call' />
            <p>+ 974 7782 8115</p>
          </div>
        </div>
        <div className='mt-3'>
          <p className='contact--details-country m-4' >Singapore</p>
          <div className='contact--details-location'>
            <Location className='contact--details-icon' />
            <div>
              <p>68 Circular Road, #02-01, </p>
              <p>Singapore, 049422.</p>
            </div>
          </div>
          <div className='contact--details-call mt-2'>
            <Call className='contact--details-icon-call' />
            <p>+ 974 7782 8115</p>
          </div>
        </div>
      </div>
      <div className='form-container'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact