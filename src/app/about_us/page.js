import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import goop from '../images/blog_2.png';
import Image from 'next/image';
import '../sass/pages/blogs_slider.scss';
import '../sass/pages/about_page.scss';
import Title from '../components/title';
import vector from '../images/Vector_1.png';
import Link from 'next/link';



const Page = () => {
    return (
        <>
            <section className="about_page blogs_slider ">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="parent_about_page parent_blogs_slider ">
                                <Title title={'About Us'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_section even">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="inner_about_section">
                                <Row className='align-items-center row-gap-3'>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={5} xs={12}>
                                        <div className="left">
                                            <div className="rectangle"></div>
                                            <div className="image_wrapper">
                                                <div className="left_image">
                                                    <Image src={goop} alt='goop' title='...' priority={false} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={7} xs={12}>
                                        <div className="right">
                                            <h4> Who we are</h4>
                                            <p>Rapid Datacom is the US Veteran&apos;s wireless provider. Our service is based on dependable, nationwide 4G and 5G LTE networks. We are committed to providing veterans with this dependable wireless service and exceptional support, while supporting other veterans through contributions to organizations such as Platoon 22 and Heroic Reins.</p>
                                            <p>When you partner with us, you will know that you too are contributing to the recovery of our military Veterans!</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_section odd">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="inner_about_section">
                                <Row className='align-items-center row-gap-3'>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={5} xs={12} className='order-sm-1'>
                                        <div className="left">
                                            <div className="rectangle"></div>
                                            <div className="image_wrapper">
                                                <div className="left_image">
                                                    <Image src={goop} alt='goop' title='...' priority={false} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={7} xs={12}>
                                        <div className="right">
                                            <h4> Our mission</h4>
                                            <p>Our mission is to provide great mobile service that supports causes dedicated to the health and recovery of US Veterans.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_section even">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="inner_about_section">
                                <Row className='align-items-center row-gap-3'>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={5} xs={12}>
                                        <div className="left">
                                            <div className="rectangle"></div>
                                            <div className="image_wrapper">
                                                <div className="left_image">
                                                    <Image src={goop} alt='goop' title='...' priority={false} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={7} xs={12}>
                                        <div className="right">
                                            <h4>Our vision</h4>
                                            <h5>Improving the lives of <span>US Veterans.</span></h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_section odd">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="inner_about_section">
                                <Row className='align-items-center row-gap-3'>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={5} xs={12} className='order-sm-1'>
                                        <div className="left">
                                            <div className="rectangle"></div>
                                            <div className="image_wrapper">
                                                <div className="left_image">
                                                    <Image src={goop} alt='goop' title='...' priority={false} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={7} xs={12}>
                                        <div className="right">
                                            <h4> Values</h4>
                                            <p>We support organizations with shared values. Our focus is to ensure US Veterans recovery programs are provided the resources necessary.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="join about_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_join inner_about_section">
                                <Row className='align-items-center row-gap-3'>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={6} xs={12}>
                                        <div className="left_join " >
                                            <div className="join_image">
                                                <Image src={vector} alt='vector' title='...' priority={false} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={6} xs={12}>
                                        <div className="right_join right">
                                            <div className='small_text'>Join Our network</div>
                                            <h4>Are you ready to join us ?</h4>
                                            <p>Lorem ipsum sit dor el ipsum dor dolor sit ipsum lorem dor dolor sit sat lorem ipsum dor sit.</p>
                                            <div className="join_btn">
                                                <Link href={''} className='btn-primary' prefetch>Join</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Page