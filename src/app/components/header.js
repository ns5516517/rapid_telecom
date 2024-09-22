'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../sass/pages/header.scss';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const [toggle, setToggle] = useState(false)
    
    const pathname = usePathname();

    useEffect(() => {
        setToggle(false)
    }, [pathname])

    useEffect(()=>{
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    },[toggle])


    const Links = [
        { name: 'Home', link: '/home' },
        { name: 'About Us', link: '/about_us' },
        { name: 'Blogs', link: '/blogs' },
        { name: 'Contact Us', link: '/contact_us' },
    ];

    const btns = [
        { name: 'Login', link: '/login' },
        { name: 'Register', link: '/sign_up' },
    ];

   

    return (
        /* ----------  Header Start  -----------*/
        <>
            <section className="header">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_header">
                                <div className="header_left">
                                    <div className="inner_left">
                                        <div className="logo">
                                            <Image src={logo} alt='logo' title='...' priority={true} loading='eager' />
                                        </div>
                                    </div>
                                    <div className="inner_right">
                                        <ul>
                                            {
                                                Links.map((item, index) => {
                                                    return <li key={index}>
                                                        <Link href={item.link}
                                                            className={`link ${pathname === item.link ? 'active' : ''}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="header_right">
                                    <div className="menu_bar d-block d-md-none" onClick={() => setToggle(true)}><FontAwesomeIcon icon={faBars} /></div>
                                    <ul className="btns">
                                        {
                                            btns.map((btn, index) => (
                                                <li key={index}>
                                                    <Link href={btn.link}
                                                        className={`btn-primary ${btn.link === '/sign_up' ? 'active' : ''}`}
                                                    >
                                                        {btn.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* --------  Mobile Navbar Start  ---------- */}

            <div className={`mobile_nav ${toggle == true ? 'show' : ''}`}>
                <div className="top_area">
                    <div className="logo">
                        <Image src={logo} alt='logo' title='...' priority={true} loading='eager' />
                    </div>
                    <div className="close_icon" onClick={() => setToggle(false)}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                </div>
                <ul>
                    {
                        Links.map((item, index) => {
                            return <li key={index}>
                                <Link href={item.link}
                                    className={`link ${pathname === item.link ? 'active' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>

            {/* --------  Mobile Navbar End  ---------- */}

        </>
        /* ----------  Header End  -----------*/

    )
}

export default Header