'use client';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import '../../../sass/pages/login.scss';
import { useParams, useRouter } from 'next/navigation';
import Title from '@/app/components/title';
import Animation from '@/app/components/animation';
import axios, { AxiosError } from 'axios';

const Page = () => {

    const { token } = useParams();
    const router = useRouter();

    const password = [
        { name: "New Password", placeholder: 'Enter new password', password: 'password' },
        { name: "Confirm Password", placeholder: 'Confirm new password', password: 'Cpassword' }
    ];

    const [response, setResponse] = useState({
        status: undefined,
        message: ''
    });

    const [formData, setFormData] = useState({});


    function handleChange(field, value) {
        setFormData({ ...formData, [field]: value })
    }

    function Validate() {
        if (!formData.password || !formData.Cpassword) {
            setResponse({ ...response, status: true, message: 'Please Enter the Password ' })
            return false;
        }
        else if (formData.password.length < 8 || formData.Cpassword.length < 8) {
            setResponse({ ...response, status: true, message: 'Password length should be Greater then 8 Characters ' })
            return false;
        }
        else if (formData.password !== formData.Cpassword) {
            setResponse({ ...response, status: true, message: 'Password do not Match' })
            return false;
        }
        else {
            return true;
        }
    }

    // reset Password
    async function handleSubmit(e) {
        e.preventDefault();
        let isValid = Validate();
        if (isValid) {
            try {
                const res = await axios.post(`http://159.65.150.47:4000/auth/recover-password/${token}`, {
                    new_password: formData.password,
                    confirm_password: formData.Cpassword
                })
                if (res.data.status) {
                    setResponse({ ...response, status: res.data.status, message: res.data.message })
                    setTimeout(() => {
                        router.push(`/login/${token}`)
                    }, 2000)
                }
                else {
                    setResponse({ ...response, status: res.data.status, message: res.data.message })
                }
            } catch (error) {
                setResponse({ ...response, status: error.status, message: error.message })
            }
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
        /*  ------------  Reset Page Start  --------------*/
        <>
            <Animation>
                <section className=" login reset">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="parent_reset">
                                    <Title title={'Reset Password'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                                    <div className="reset_form globe">
                                        <Form onSubmit={handleSubmit}>
                                            <div className='form_field'>
                                                {
                                                    password.map((item, index) => (
                                                        <Form.Group
                                                            className="form_group"
                                                            controlId={`formGroupEmail${index}`}
                                                            key={index}
                                                        >
                                                            <Form.Label>{item.name}</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder={item.placeholder}
                                                                onChange={(e) => handleChange(item.password, e.target.value)}
                                                            />
                                                        </Form.Group>
                                                    ))
                                                }
                                            </div>
                                            <Button type='submit'
                                                className='btn-primary reset_btn reset'
                                            >Reset</Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {
                        < Toast show={response.status !== undefined} delay={1500} autohide>
                            <Toast.Body>{response.message}</Toast.Body>
                        </Toast >
                    }
                </section>
            </Animation>
        </>
        /*  ------------  Reset Page End  --------------*/
    )
}

export default Page