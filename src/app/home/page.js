'use client'
import React from 'react';
import Banner from '../components/banner';
import About from '../components/about_us';
import Blogs_Slider from '../components/blogs_slider';
import Testi from '../components/testi';
import News from '../components/news';

const Page = () => {
  return (
    <>
      <Banner />
      <About />
      <Blogs_Slider />
      <Testi />
      <News />
    </>
  )
}

export default Page