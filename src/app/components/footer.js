import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer_logo from '../images/logo.png';
import '../sass/pages/footer.scss';
import Image from 'next/image';
import Link from 'next/link';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    const footer_data = [
        {
            title: "Quick Links", data: [
                { name: 'Home', link: '/home' },
                { name: 'About Us', link: '/about_us' },
                { name: 'Blog', link: '/blogs' },
                { name: 'Blog Detail', link: '/blog_detail' },
            ]
        },
        {
            title: 'Useful Links', data: [
                { name: 'Terms & Conditions', link: '/terms' },
                { name: 'Privacy Policy', link: '/privacy_policy' },
                { name: 'Contact Us', link: '/contact_us' },
                { name: 'FAQs', link: '/faqs' },
            ]
        }
    ]

    const social_media = [
        { name: <FontAwesomeIcon icon={faFacebookF} />, link: 'https://www.facebook.com/' },
        { name: <FontAwesomeIcon icon={faTwitter} />, link: 'https://www.twitter.com/' },
        { name: <FontAwesomeIcon icon={faInstagram} />, link: 'https://www.instagram.com/' },
    ]

    return (
        /* ----------  Footer Start  -----------*/
        <>

            <section className="footer">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_footer">
                                <Row>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <div className="footer_left">
                                            <div className="footer_logo">
                                                <Image src={footer_logo} alt='footer_logo' title='...' priority={false} loading='lazy' />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            <ul>
                                                {social_media.map((icon, index) => (
                                                    <li key={index}><Link href={icon.link} prefetch target='_blank' >{icon.name}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={12} sm={12} xs={12}>
                                        <div className="footer_right">
                                            <Row>
                                                {
                                                    footer_data.map((item, index) => (
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6} key={index}>
                                                            <div className="list">
                                                                <h3>{item.title}</h3>
                                                                <ul>
                                                                    {
                                                                        item.data.map((ele, i) => (
                                                                            <li key={i}><Link href={ele.link} prefetch >{ele.name}</Link></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                    ))
                                                }
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer_bottom">
                    <ul>
                        <li>&copy; 2022</li>
                        <li>All Rights Reserved</li>
                        <li>Powered By <Link href='https://globiztechnology.com/'>Globiz Technology Inc.</Link></li>
                    </ul>
                </div>
            </section>
        </>
        /* ----------  Footer End  -----------*/

    )
}

export default Footer