import { faChevronLeft, faChevronRight, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';
import testi_1 from '../images/testminial3.png';
import '../sass/pages/testi.scss';
import axios from 'axios';

const Testi = () => {

    const [testiData, setTestiData] = useState([])

    useEffect(() => {
        const get_data = async () => {
            try {
                const res = await axios.get('http://192.168.1.22:4001/admin/testimonial')
                console.log(res.data.status)
                if (res.data.status) {
                    setTestiData(res.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        get_data()
    }, [])

    return (
        <>
            <section className="testi">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_testi">
                                <div className="title">
                                    <h3>Testimonial</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.</p>
                                </div>
                                <div className="testi_swiper_parent">
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={20}
                                        slidesPerView={3}
                                        loop={true}
                                        navigation={{
                                            nextEl: '.next_testi',
                                            prevEl: '.prev_testi'
                                        }}
                                        breakpoints={{
                                            1366: {
                                                spaceBetween: 20
                                            },
                                            768: {
                                                slidesPerView: 1
                                            },
                                            576: {
                                                slidesPerView: 1
                                            },
                                            932: {
                                                slidesPerView: 1,
                                                spaceBetween: 12
                                            },
                                            361: {
                                                slidesPerView: 1,
                                                spaceBetween: 10
                                            },
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 10
                                            }
                                        }}
                                        className='mySwiper2'
                                    >
                                        {
                                            testiData.map((item, index) => (
                                                <SwiperSlide key={item._id}>
                                                    <div className="swiper_testimonial">
                                                        <div className="upper">
                                                            <ul className="ratings">
                                                                {
                                                                    [...Array(5)].map((_, index) => (
                                                                        <li className={`star star${index}`} key={index}><FontAwesomeIcon icon={faStar} /></li>
                                                                    ))
                                                                }
                                                            </ul>
                                                            <p>{item.description} </p>
                                                        </div>
                                                        <div className="lower">
                                                            <div className="quotes"><FontAwesomeIcon icon={faQuoteRight} /></div>
                                                            <div className="testi_image">
                                                                <Image src={testi_1} alt='testi_1' title='...' priority={false} loading='lazy' />
                                                            </div>
                                                            <div className="testi_name">{item.title}</div>
                                                            <div className="testi_desc">{item.desig ? item.desig : 'Lorem Ipsum'}</div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <div className="btns">
                                        <div className="prev_testi copy"><FontAwesomeIcon icon={faChevronLeft} /></div>
                                        <div className="next_testi copy"><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Testi