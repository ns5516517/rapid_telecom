'use client'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../sass/pages/blogs_slider.scss';
import '../../sass/pages/contact.scss';
import Title from '@/app/components/title';
import Accordion from 'react-bootstrap/Accordion';

const Page = () => {
    
    const accord = [
        { title: 'Lorem ipsum dolor sit amet.', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam.' },
        { title: 'Lorem ipsum dolor sit amet.', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam.' },
        { title: 'Lorem ipsum dolor sit amet.', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam.' },
        { title: 'Lorem ipsum dolor sit amet.', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam.' },
        { title: 'Lorem ipsum dolor sit amet.', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam.' },
        { title: 'Lorem ipsum dolor sit amet.', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam. Etiam tristique euismod ante, vel ornare urna. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Vitae malesuada felis ex tempus diam. Etiam tristique euismod Suspendisse potenti. Lorem ipsum dolor sit amet. Suspendisse augue purus, hendrerit vel lacus at, aliquam eleifend lacus. Nam quis nulla sollicitudin enim scelerisque molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis dolor mauris. Nullam interdum, ectus, vitae malesuada felis ex tempus diam.' }
    ]
    
    return (
        <>
            <section className="contact_us blogs_slider about_page">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="parent_contact_us parent_blogs_slider">
                                <Title title={'FAQ'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="cms faq">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_faq">
                                <Accordion defaultActiveKey="0">
                                    {
                                        accord.map((item, index) => (
                                            <Accordion.Item eventKey={index} key={index}>
                                                <Accordion.Header>{item.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    {item.para}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Page