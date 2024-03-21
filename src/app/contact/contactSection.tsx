"use client"

import { Envelope, MapPin, Phone } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <div className='capitalize flex flex-row justify-center items-center gap-6'>
    <div className='w-2/4'>
  <ul className='ml-[184px] flex flex-row justify-center items-center mb-4'>
    <li className='mr-2'><span className='text-green-700'><MapPin size={32}/></span></li>
    <li>
      <p className='font-bold text-xl mb-1'>Address</p>
      <p className='hover:text-green-700 transition-all'><Link target='_blank' href='https://maps.app.goo.gl/5J7cmcCmTUd4qgve6'>JL. Bina Marga No. 76 RT 003 / 005, Sanja, Kec. Citeureup, Kabupaten Bogor, Jawa Barat 16810</Link></p>
    </li>
  </ul>
  <ul className='flex flex-row justify-center items-center mb-4'>
    <li className='mr-2 -ml-3'><span className='text-green-700'><Envelope size={32} /></span></li>
    <li className='normal-case'>
      <p className='font-bold text-xl mb-1'>Email</p>
      <p className='hover:text-green-700 transition-all'><Link href='mailto:admin@freshbeton.com'>admin@freshbeton.com</Link></p>
    </li>
  </ul>
</div>
<div className='w-2/4'>
  <ul className='-mt-20 flex flex-row justify-center items-center'>
    <li className='mr-2'><span className='text-green-700'><Phone size={32} /></span></li>
    <li>
      <p className='font-bold text-xl mb-1'>contact</p>
      <p className='hover:text-green-700 transition-all'><Link href='https://wa.me/6281574747474' target='_blank'>0815 7474 7474</Link></p>
      <p className='hover:text-green-700 transition-all'><Link href='https://wa.me/6281575453524' target='_blank'>0815 7545 3524</Link></p>
    </li>
  </ul>
</div>
    </div>
  )
}

export default ContactSection