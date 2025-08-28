import React from 'react'
import HomeEvents from './HomeEvents'
import HomeProjects from './HomeProjects'
import Collage from './Collage'
import HomeAboutUs from './HomeAboutUs'

export default function Home() {
    return (
        <>
            <Collage />
            <HomeAboutUs />
            <HomeEvents />
            <HomeProjects />
        </>
    );
}
