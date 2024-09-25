'use client'
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../sass/pages/login.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Title from '@/app/components/title';


const Page = () => {
    const [show, setShow] = useState(false)

    const router = useRouter();

    function handleShow(index) {
        setPassword(password.map((ele, i) =>
            i === index ? { ...ele, toggle: !ele.toggle } : ele
        ));
    }

    function handleSubmt(e) {
        console.log(e)
        e.preventDefault();
    }

    return (
        /*  ------------  Login Page Start  --------------*/
        <>
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
                                            <Form.Control type="email" placeholder="Enter email" required />
                                        </Form.Group>
                                        <Form.Group className="form_group" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type={show ? 'text' : 'password'} placeholder='Enter new password' required />
                                        </Form.Group>
                                        <div className="forgot_pass"><Link href='/forgot_password'>Forgot Password ?</Link></div>
                                        <Button type='submit' onClick={() => router.push('/dashboard/profile')} className='btn-primary login_btn'>Login</Button>
                                        <p>Don&apos;t have an account? <Link href='/sign_up' prefetch>Sign Up</Link></p>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        /*  ------------  Login Page End  --------------*/

    )
}

export default Page