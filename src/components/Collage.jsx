import React from 'react'
import ACMCollagePic1Component from './CollagePic1'
import ACMCollagePic2Component from './CollagePic2'

export default function Collage() {
    return (
        <>
        <div className='parallax'>
            <div class="parallax-layer layer1">
                <ACMCollagePic1Component />
            </div>
            <div class="parallax-layer layer2">
                <ACMCollagePic2Component />
            </div>
            <div class="parallax-layer layer3">
                <ACMCollagePic1Component />
                <ACMCollagePic2Component />
            </div>
        </div>
        </>
    )
}