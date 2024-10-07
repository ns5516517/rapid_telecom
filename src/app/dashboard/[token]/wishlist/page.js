"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/components/loading";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from "@/app/components/breadcrumb";
import * as freesolidsvg from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import "../../../sass/dashboard/wishlist.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const BlogCard = dynamic(() => import("@/app/components/blog_card"), {
    loading: () => <Loading />,
});

const Page = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        let card = JSON.parse(localStorage.getItem('card'));
        console.log(card)
        setWishlist(card)
    }, []);
    console.log(wishlist, '--')

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const res = await axios.get("http://192.168.1.43:8000/blogs");
    //             console.log(res.status);
    //             if (res.status) {
    //                 const data = res.data.data.rows;
    //                 setWishlist(data);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getData();
    // }, []);

    return (
        <div className="wishlist">
            <Breadcrumb name={"My Wishlist"} />
            <Row className="row-gap-3">
                {wishlist !== null && wishlist.map((ele, i) => (
                    <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12} key={ele.id}>
                        <div className="wishlist_card">
                            <BlogCard
                                src={ele.src}
                                date={ele.date}
                                title={ele.title}
                                heart={<FontAwesomeIcon icon={freesolidsvg.faHeart} /> }
                                desc={ele.desc}
                                id={ele.id}
                            />
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Page;
