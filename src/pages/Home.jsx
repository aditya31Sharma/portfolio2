import React from 'react'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import GlanceAtWork from './sections/GlanceAtWork'
import Quote from './sections/Quote'
import Connect from './sections/Connect'
const Home = () => {
    return (
        <div className="home-container">
        <Hero/>
        <Skills/>
        <GlanceAtWork/>
        <Quote/>
        <Connect/>
        </div>
    );
}
export default Home