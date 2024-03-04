import React from 'react'

const ContactForm = () => {
    return (
        <div className='form'>
            <div className='form--title'>Let's talk</div>
            <div className='form--field'>
                <label className='form--label'>Name<span className='require '>*</span></label>
                <br />
                <input type='text' className='form--input' />
            </div>
            <div className='form--field'>
                <label className='form--label'>Email <span className='require '>*</span></label>
                <br />
                <input type='email' className='form--input' />
            </div>
            <div className='form--field'>
                <label className='form--label'>Mobile No</label>
                <br />
                <input type='tel' className='form--input' pattern="[0-9]*" title="Please enter only numbers" />
            </div>
            <div className='form--field'>
                <label className='form--label'>Message</label>
                <br />
                <textarea type='text' className='form--input-textarea' />
            </div>
            <div className='form--field'>
                <button className='btn btn-primary form--field-btn'>
                    Send
                </button>
            </div>

        </div>
    )
}

export default ContactForm