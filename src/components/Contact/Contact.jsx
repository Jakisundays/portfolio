import React, { useRef } from 'react'
import { useState } from 'react'
import { ContactButton, ContactContainer, ContactH2, ContactImg, ContactInfo, ContactInput, ContactMsg, ContactWrapper } from './ContactElements'
import map from '/Users/jacobdominguez/Documents/codiyapa/portfolio/src/images/undraw_contact_us_re_4qqt.svg'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  const form = useRef();


  const send = (e) => {
    e.preventDefault();

    emailjs.sendForm('Jakolino', 'template_6bj988b', form.current, 'JnWbGqxJYm-aBdDbf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('')
      setMail('')
      setPhone('')
      setMsg('')
  }
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactImg src={map} />
        <ContactInfo ref={form} onSubmit={send} >
          <ContactH2>Contact me</ContactH2>
          <ContactInput type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} name='user_name' />
          <ContactInput type='email' placeholder='Email' value={mail} onChange={(e) => setMail(e.target.value)} name='user_email'/>
          <ContactInput type='tel' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} name='user_phone'/>
          <ContactMsg placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} name='user_message' />
          <ContactButton type='submit' value='Send' />
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
