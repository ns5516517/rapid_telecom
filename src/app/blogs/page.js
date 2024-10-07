"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../sass/pages/blogs_slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as freesolidsvg from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Title from "../components/title";
import axios from "axios";
import BlogCard from "../components/blog_card";
import { motion } from 'framer-motion';
import Animation from "../components/animation";

const Page = () => {
    const [blogs_data, setBlogs_data] = useState([]);

    const lists = [
        "lorem",
        "ipsum",
        "dollar",
        "lorem",
        "ipsum",
        "dollar",
        "lorem",
        "ipsum",
        "lorem",
        "ipsum",
        "dollar",
        "lorem",
        "ipsum",
        "dollar",
        "lorem",
        "ipsum",
    ];

    const ref = useRef(null);
    const [active, setActive] = useState(0);

    function Left() {
        ref.current.scrollLeft -= 250;
    }

    function right() {
        ref.current.scrollLeft += 250;
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://192.168.1.43:8000/blogs");
                if (res.status) {
                    const data = res.data.data.rows;
                    setBlogs_data(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <Animation>
                <section className="all_blogs blogs_slider ">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="parent_all_blogs parent_blogs_slider">
                                    <Title title={"Blogs"} />
                                    <div className="search_tags">
                                        <div className="next_prev prev" onClick={Left}>
                                            <FontAwesomeIcon icon={freesolidsvg.faChevronLeft} />
                                        </div>
                                        <motion.ul className="filters" ref={ref}>
                                            {lists.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className={active === index ? "active" : ""}
                                                    onClick={() => setActive(index)}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: index * 0.01 }}
                                                >
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                        <div className="next_prev next" onClick={right}>
                                            <FontAwesomeIcon icon={freesolidsvg.faChevronRight} />
                                        </div>
                                    </div>
                                    <div className="cards blog_swiper_parent">
                                        {blogs_data.map((item, index) => (
                                            <BlogCard
                                                src={item.image}
                                                desc={item.description}
                                                date={item.created_at}
                                                title={item.title}
                                                id={item.id}
                                                key={index}
                                                index={index}
                                                heart={<FontAwesomeIcon icon={freesolidsvg.faHeart} />}
                                                regular_heart={<FontAwesomeIcon icon={faHeart} />}
                                            />
                                        ))}
                                    </div>
                                    <div className="view_all right_btn">
                                        <div className="view_more plus">
                                            <span>
                                                <FontAwesomeIcon icon={freesolidsvg.faPlus} />
                                            </span>
                                            View More
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Animation>
        </>
    );
};

export default Page;
