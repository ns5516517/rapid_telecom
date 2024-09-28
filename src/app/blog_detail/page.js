"use client";
import axios from "axios";
import Image from "next/image";
import Title from "../components/title";
import "../sass/pages/blog_detail.scss";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import blog_detail from "../images/blog_detail.png";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Related_posts from "../components/related_posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { faArrowLeft, faStar, faXmark, } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(-1);
    const [detail, setDetail] = useState('');
    const [new_post_data, setNewPostData] = useState([]);

    useEffect(() => {
        const get_data = async () => {
            try {
                const res = await axios.get("http://192.168.1.43:8000/blogs/view/8");
                if (res.data.status) {
                    const extract_data = res.data.data;
                    setDetail(extract_data)
                }
            } catch (error) {
                console.log(error);
            }
        };
        get_data();
    }, []);
    
    useEffect(() => {
        const get_data = async () => {
            try {
                const res = await axios.get("http://192.168.1.43:8000/blogs/newPost/23");
                if (res.data.status) {
                    const extract_data = res.data.data.rows;
                    setNewPostData(extract_data)
                    console.log(extract_data)
                }
            } catch (error) {
                console.log(error);
            }
        };
        get_data();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/rating_list')
    };

    return (
        <>
            <section className="blog_detail">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_blog_detail">
                                <Row className="row-gap-2">
                                    <Col xxl={8} xl={8} lg={7} md={7} sm={12} xs={12}>
                                        <div className="left">
                                            <div className="back">
                                                <Breadcrumb>
                                                    <Breadcrumb.Item onClick={() => router.back()}>
                                                        <span>
                                                            <FontAwesomeIcon icon={faArrowLeft} />
                                                        </span>
                                                        Blogs
                                                    </Breadcrumb.Item>
                                                </Breadcrumb>
                                            </div>
                                            <h3>
                                                {detail.title}
                                            </h3>
                                            <div className="date">{new Date(detail.created_at).toDateString()}</div>
                                            <div className="blog_image">
                                                <Image
                                                    src={blog_detail}
                                                    alt="blog_detail"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                            <div className="content_box">
                                                <div className="detail" dangerouslySetInnerHTML={{ __html: detail.description }}></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={5} md={5} sm={12} xs={12}>
                                        <div className="right">
                                            <h4>New Posts</h4>
                                            <ul>
                                                {new_post_data.map((item, index) => (
                                                    <li key={item.id} dangerouslySetInnerHTML={{__html:item.description.slice(0, 250).concat('...')}}></li>
                                                ))}
                                            </ul>
                                            <Button variant="primary" onClick={() => setShow(true)}>
                                                Rate & Review
                                            </Button>
                                            <Modal show={show}>
                                                <Modal.Header onClick={() => setShow(false)}>
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="form_area">
                                                        <Title title={"Write a Review"} />
                                                        <Form onSubmit={handleSubmit}>
                                                            <div className="form">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label>
                                                                        How would you rate it ?
                                                                    </Form.Label>
                                                                    <ul className="rating_area">
                                                                        {[...Array(5)].map((_, index) => {
                                                                            const givenRating = index + 1;
                                                                            return (
                                                                                <li
                                                                                    key={index}
                                                                                    className={
                                                                                        givenRating < active ||
                                                                                            givenRating == active
                                                                                            ? "active"
                                                                                            : ""
                                                                                    }
                                                                                    onClick={() => {
                                                                                        setActive(givenRating);
                                                                                    }}
                                                                                >
                                                                                    <FontAwesomeIcon icon={faStar} />
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </Form.Group>
                                                                <Form.Group
                                                                    className="form-group"
                                                                    controlId="title"
                                                                >
                                                                    <Form.Label>Title your Review</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group
                                                                    className="form-group"
                                                                    controlId="textarea"
                                                                >
                                                                    <Form.Label>Title your Review</Form.Label>
                                                                    <Form.Control
                                                                        as={"textarea"}
                                                                        rows={8}
                                                                    />
                                                                </Form.Group>
                                                            </div>
                                                            <div className="modal_footer">
                                                                <Button
                                                                    type="submit"
                                                                    variant="primary"
                                                                    onClick={() => {
                                                                        setShow(false);
                                                                    }}
                                                                >
                                                                    Submit
                                                                </Button>
                                                                <Button
                                                                    type="reset"
                                                                    variant="primary"
                                                                    onClick={() => setShow(false)}
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Related_posts />
        </>
    );
};

export default Page;
