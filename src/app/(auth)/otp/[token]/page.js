'use client';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import '../../../sass/pages/otp.scss';
import { useParams, useRouter } from 'next/navigation';
import Title from '@/app/components/title';
import Animation from '@/app/components/animation';
import axios from 'axios';

const Page = () => {

    const router = useRouter();
    const { token } = useParams();
    const [response, setResponse] = useState({
        status: undefined,
        message: ''
    });

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (value, index) => {
        const update_otp = [...otp]
        update_otp[index] = value
        setOtp(update_otp)
    }

    // otp Submit
    async function handleSubmit(e) {
        e.preventDefault();
        const combined_otp = otp.join('')
        try {
            const res = await axios.post(`http://159.65.150.47:4000/auth/forgot-verify-otp/${token}`, { otp: combined_otp })
            if (res.data.status) {
                setResponse({ message: res.data.message, status: res.data.status })
                setTimeout(() => {
                    router.push(`/reset_password/${token}`)
                }, 2000);
            }
            else {
                setResponse({ status: res.data.status, message: res.data.message })
            }
        } catch (err) {
            setResponse({ ...response, status: err.status, message: err.message })
        }
    }

    // resend Otp 
    async function resend() {
        try {
            const res = await axios.post(`http://159.65.150.47:4000/auth/email-resend-otp/${token}`)
            console.log(res)
            if (res.data.status) {
                setResponse({ ...response, status: res.data.status, message: res.data.message })
            }
            else {
                setResponse({ ...response, status: res.data.status, message: res.data.message })
            }
        } catch (error) {
            setResponse({ ...response, status: error.status, message: error.message })
        }
    }

    // logic for toast to show up
    useEffect(() => {
        let timer
        if (response.status !== undefined) {
            timer = setTimeout(() => {
                setResponse({ ...response, status: undefined })
            }, 1500);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [response.status])

    return (
        /*  ------------  OTP Page Start  --------------*/
        <>
            <Animation>
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
                                                        <Form.Control type="text"
                                                            maxLength={1}
                                                            onChange={(e) => handleChange(e.target.value, index)}
                                                        />
                                                    </Form.Group>
                                                ))
                                            }
                                        </div>
                                        <div className="forgot_pass" onClick={resend}>Resend OTP</div>
                                        <Button type='submit' className='btn-primary otp_btn'>Submit</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {
                        < Toast show={response.status !== undefined} delay={1500} autohide >
                            <Toast.Body>{response.message}</Toast.Body>
                        </Toast >
                    }
                </section>
            </Animation>
        </>
        /*  ------------  OTP Page End  --------------*/
    )
}

export default Page