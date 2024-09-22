'use client';
import Link from 'next/link';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../../sass/pages/login.scss';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/title';

const Page = () => {

    const password = [
        { name: "New Password", placeholder: 'Enter new password' },
        { name: "Confirm Password", placeholder: 'Confirm new password' }
    ]

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        /*  ------------  Reset Page Start  --------------*/
        <>
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
                                                    <Form.Group className="form_group" controlId={`formGroupEmail${index}`} key={index}>
                                                        <Form.Label>{item.name}</Form.Label>
                                                        <Form.Control type="password" placeholder={item.placeholder} />
                                                    </Form.Group>
                                                ))
                                            }
                                        </div>
                                        <Button type='submit' className='btn-primary reset_btn reset' onClick={() => router.push('/login')}>Reset</Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        /*  ------------  Reset Page End  --------------*/
    )
}

export default Page