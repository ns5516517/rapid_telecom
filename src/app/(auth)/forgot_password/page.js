'use client';
import Link from 'next/link';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../../sass/pages/login.scss';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/title';

const Page = () => {

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        /*  ------------  Forgot Page Start  --------------*/
        <>
            <section className="login forgot">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_forgot">
                                <Title title={'Forgot Password'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                                <div className="forgot_form globe">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="form_group" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Button type={'submit'} className='btn-primary forgot_btn forgot' onClick={() => router.push('/otp')}>Send OTP</Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        /*  ------------  Forgot Page End  --------------*/
    )
}

export default Page