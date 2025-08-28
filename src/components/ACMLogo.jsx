import React from 'react'
import ACMLogoImg from '../photos/ACMLogo.png'
import Image from 'react-bootstrap/Image'

export default function ACMLogo() {
    return (
        <Image className='pic' id='acm-logo' src={ACMLogoImg} fluid/>
    )
}
