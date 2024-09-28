import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import Blog_card from './blog_card';
import 'swiper/css/navigation';
import 'swiper/css';
import '../sass/pages/blogs_slider.scss';

const Blogs_Slider = () => {

    const [blog_slider_data, setBlog_slider_data] = useState([])


    // function toggle(index) {
    //     let tempVal = [...blog_slider_data]
    //     tempVal[index] = { ...tempVal[index], manages: tempVal[index].manages == false ? true : false }
    //     // console.log("================",tempVal[index].manages)
    //     setBlog_slider_data(tempVal)
    // }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://192.168.1.43:8000/blogs')
                console.log(res.status)
                if (res.status) {
                    const data = res.data.data.rows
                    setBlog_slider_data(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <>
            <section className="blogs_slider">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_blogs_slider">
                                <div className="title">
                                    <h3>Blogs</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
                                </div>
                                <div className="blog_swiper_parent">
                                    <Swiper
                                        modules={[Navigation]}
                                        loop={true}
                                        spaceBetween={20}
                                        slidesPerView={3}
                                        navigation={{
                                            nextEl: '.next',
                                            prevEl: '.prev'
                                        }}
                                        breakpoints={{
                                            1366: {
                                                spaceBetween: 20
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            576: {
                                                slidesPerView: 2
                                            },
                                            932: {
                                                slidesPerView: 3,
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
                                        className='mySwiper1'
                                    >
                                        {
                                            blog_slider_data.map((item, index) => (
                                                <SwiperSlide key={item.id}>
                                                    <Blog_card src={item.src}  desc={item.description} date={item.created_at} title={item.title} />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <div className="ltr">
                                        <div className="prev same "><FontAwesomeIcon icon={faChevronLeft} /></div>
                                        <div className="next same "><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </div>
                                </div>
                                <div className="view_all">
                                    <Link className='view_more' href='/blogs' prefetch>VIEW ALL BLOGS</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Blogs_Slider