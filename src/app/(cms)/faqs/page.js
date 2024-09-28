"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../sass/pages/blogs_slider.scss";
import "../../sass/pages/contact.scss";
import Title from "@/app/components/title";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

const Page = () => {
  const [accord, setAccord] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://192.168.1.22:4001/admin/faqs");
        if (res.data.status) {
          const data = res.data.data;
          setAccord(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []); 

  return (
    <>
      <section className="contact_us blogs_slider about_page">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="parent_contact_us parent_blogs_slider">
                <Title title={"FAQ"} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="cms faq">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="parent_faq">
                <Accordion defaultActiveKey="0">
                  {accord.map((item, index) => (
                    <Accordion.Item eventKey={item._id} key={item._id}>
                      <Accordion.Header>{item.title}</Accordion.Header>
                      <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page;
