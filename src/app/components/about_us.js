'use client'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import about from '../images/about.png';
import '../sass/pages/about.scss';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const About = () => {

    const [show, setShow] = useState(false);

    const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

    const [istruncate, setIsTruncate] = useState(true);
    const characterLimit = 400;

    const toggleTruncate = () => {
        setIsTruncate(!istruncate)
    }
    return (
        <>
            <section className="about">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_about">
                                <div className="left">
                                    <div className="play" onClick={() => setShow(true)}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                    <div className="left_image">
                                        <Image src={about} alt='about' title='...' priority={false} loading='lazy' />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content_area">
                                        <h3>About Us</h3>
                                        <p>{text.length > 400 && istruncate ? text.slice(0, characterLimit) + '...' : text}</p>
                                        <div className="btn-primary" onClick={toggleTruncate}>{istruncate ? 'Read More' : 'Read Less'}</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>About Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0fYi8SGA20k?si=4uTCQKpV4MdXQ9x_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default About