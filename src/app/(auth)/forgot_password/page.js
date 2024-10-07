'use client';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import '../../sass/pages/login.scss';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/title';
import Animation from '@/app/components/animation';
import axios from 'axios';

const Page = () => {
    const router = useRouter();
    const [forgot_pass, setForgot_pass] = useState({
        email: '',
    })
    const [response, setResponse] = useState({
        status: undefined,
        message: ''
    })
    const handleChange = (value) => {
        setForgot_pass({ email: value })
    }

    // forgot password
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://159.65.150.47:4000/auth/forgot-password', forgot_pass)
            if (res.data.status) {
                setResponse({ message: res.data.message, status: res.data.status })
                setTimeout(() => {
                    router.push(`/otp/${res.data.token}/?type=forgot_otp`)
                }, 2000);
            }
            else {
                setResponse({ status: res.data.status, message: res.data.message })
            }
        } catch (err) {
            setResponse({ ...response, status: err.status, message: err.message })
        }
    }

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
        /*  ------------  Forgot Page Start  --------------*/
        <>
            <Animation>
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
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    onChange={(e) => handleChange(e.target.value)} />
                                            </Form.Group>
                                            <Button
                                                type={'submit'}
                                                className='btn-primary forgot_btn forgot'
                                            >
                                                Send OTP
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {
                        typeof window !== undefined &&
                        < Toast show={ response.status !== undefined} delay={1500} autohide >
                            <Toast.Body>{response.message}</Toast.Body>
                        </Toast >
                    }
                </section>
            </Animation>
        </>
        /*  ------------  Forgot Page End  --------------*/
    )
}

export default Page