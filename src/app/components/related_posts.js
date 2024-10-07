import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog_card from './blog_card';
import Title from './title';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freesolidsvg from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../sass/pages/related.scss';

const Related_posts = () => {
    const [related, setRelated] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://192.168.1.43:8000/blogs");
                if (res.status) {
                    const data = res.data.data.rows;
                    setRelated(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        getData();
    }, []);

    return (
        <>
            <section className="related">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_related">
                                <Title title={'Related Posts'} />
                                <div className="cards">
                                    {
                                        related.map((item, index) => {
                                            if (index < 3) {
                                                return <Blog_card
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
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Related_posts