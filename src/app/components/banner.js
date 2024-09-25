'use client'
import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import person from '../images/person.png';
import 'swiper/css';
import 'swiper/css/pagination';
import '../sass/pages/banner.scss';
import 'swiper/css/autoplay';

const Banner = () => {
  return (
    <>
      <section className="banner">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
              <div className="parent_banner">
                <div className="swiper_container">
                  <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    loop={true}
                    // autoplay={{
                    //   delay: 1500,
                    //   disableOnInteraction: false
                    // }}
                    breakpoints={{
                      361:{
                        spaceBetween: 30
                      },
                      576: {
                        spaceBetween: 40
                      },
                      768:{
                        spaceBetween: 50
                      }
                    }}
                    speed={2000}
                    spaceBetween={60}>
                    {
                      [...Array(5)].map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="swiper_item">
                            <div className="left">
                              <h3>Stay Connected <span>With Rapid</span></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor nihil libero ipsa repellat. Alias.</p>
                              <Link href={'/'} prefetch>Get started <span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                            </div>
                            <div className="right">
                              <div className="front_image">
                                <Image src={person} alt='front' title='...' priority={false} />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Banner