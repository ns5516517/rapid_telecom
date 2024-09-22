'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import '../../sass/pages/otp.scss';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/title';

const Page = () => {

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        /*  ------------  OTP Page Start  --------------*/
        <>
            <section className="otp">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_otp">
                                <Title title={'OTP Verification'} desc={'Please enter the OTP sent to your registered Email Address'} />
                                <Form onSubmit={handleSubmit}>
                                    <div className="otp_input_area">
                                        {
                                            [...Array(6)].map((_, index) => (
                                                <Form.Group className="form_group" controlId={`formGroupEmail${index}`} key={index}>
                                                    <Form.Control type="text" maxLength={1} />
                                                </Form.Group>
                                            ))
                                        }
                                    </div>
                                    <div className="forgot_pass">Resend OTP</div>
                                    <Button type='submit' className='btn-primary otp_btn' onClick={() => router.push('/reset_password')}>Submit</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        /*  ------------  OTP Page End  --------------*/
    )
}

export default Page