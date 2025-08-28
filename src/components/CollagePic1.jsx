import React from 'react'
import ACMCollagePic1 from '../photos/ACMCollagePic1.png'
import Image from 'react-bootstrap/Image'

export default function ACMCollagePic1Component() {
    return (
        <Image className='pic' id='acm-logo' src={ACMCollagePic1} fluid/>
    )
}
