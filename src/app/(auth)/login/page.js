'use client'
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../sass/pages/login.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/title';
import Animation from '@/app/components/animation';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const Page = () => {

    const [loginMessage, setLoginMessage] = useState({
        status: undefined,
        message: ''
    })

    const [show, setShow] = useState(false)

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const router = useRouter();


    function handleChange(field, value) {
        setUserData({ ...userData, [field]: value })
    }

    // login user
    async function handleSubmt(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://159.65.150.47:4000/auth/login', userData)
            if (res.data.status) {
                setLoginMessage({ message: res.data.message, status: res.data.status })
                const getUser = res.data.user.user
                console.log(getUser, '----')
                setTimeout(() => {
                    router.push(`/dashboard/${res.data.user.access.token}/profile/`)
                }, 2000)
            }
            else {
                setLoginMessage({ message: res.data.message, status: res.data.status })
            }
        } catch (err) {
            setLoginMessage({ ...loginMessage, status: err.status, message: err.message })
        }
    }

    useEffect(() => {
        let timer
        if (loginMessage.status !== undefined) {
            timer = setTimeout(() => {
                setLoginMessage({ ...loginMessage, status: undefined })
            }, 1500);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [loginMessage.status])

    return (
        /*  ------------  Login Page Start  --------------*/
        <>
            <Animation>
                <section className="login">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="parent_login">
                                    <Title title={'Login'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                                    <div className="login_form">
                                        <h3>Welcome back!</h3>
                                        <Form onSubmit={handleSubmt}>
                                            <Form.Group className="form_group" controlId="formGroupEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    required
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="form_group" controlId="formGroupPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type={show ? 'text' : 'password'}
                                                    placeholder='Enter new password'
                                                    required
                                                    onChange={(e) => handleChange('password', e.target.value)}
                                                />
                                                <div className="icon" onClick={() => setShow(!show)}>
                                                    {
                                                        show
                                                            ?
                                                            <FontAwesomeIcon icon={faEye} />
                                                            :
                                                            <FontAwesomeIcon icon={faEyeSlash} />
                                                    }
                                                </div>
                                            </Form.Group>
                                            <div className="forgot_pass"><Link href='/forgot_password'>Forgot Password ?</Link></div>
                                            <Button type='submit' className='btn-primary login_btn'>Login</Button>
                                            <p>Don&apos;t have an account? <Link href='/sign_up' prefetch>Sign Up</Link></p>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {
                        typeof window !== undefined &&
                        < Toast show={loginMessage.status !== undefined} delay={1500} autohide >
                            <Toast.Body>{loginMessage.message}</Toast.Body>
                        </Toast >
                    }
                </section>
            </Animation>
        </>
        /*  ------------  Login Page End  --------------*/

    )
}

export default Page