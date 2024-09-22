import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../sass/pages/news.scss';

const News = () => {

    const router = useRouter();

    return (
        <>
            <section className="news">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_news">
                                <div className="title">
                                    <p>Newsletter</p>
                                    <h3>Enter your email address and get started with us</h3>
                                </div>
                                <div className="form_area">
                                    <Form onSubmit={(e) => e.preventDefault()}>
                                        <Form.Group className='form-group'>
                                            <Form.Control type='email' placeholder='Enter Email' />
                                            <div className="form_btn">
                                                <Button type='submit' className='btn-primary register_btn' onClick={() => router.push('/sign_up')}>Register</Button>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default News