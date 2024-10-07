'use client'
import Title from '@/app/components/title';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../sass/pages/blogs_slider.scss';
import '../../sass/pages/contact.scss';
import Animation from '@/app/components/animation';
import axios from 'axios';

const Page = () => {
    const [privacy, setPrivacy] = useState({})

    async function getData() {
        try {
            const res = await axios.get('http://192.168.1.22:4001/pages/privacy-policy')
            if (res.status) {
                const data = res.data.data
                setPrivacy(data)
                console.log(data)
            }
        } catch (error) {
            console.log('error', error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Animation>
                <section className="contact_us blogs_slider about_page">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <div className="parent_contact_us parent_blogs_slider">
                                    <Title title={privacy.title} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="cms privacy">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="parent_privacy">
                                    <div className="privacy_head" dangerouslySetInnerHTML={{ __html: privacy.description }} ></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Animation>
        </>
    )
}

export default Page