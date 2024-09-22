'use client'
import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog_card from '../components/blog_card';
import blog_1 from '../images/blog_3.png';
import blog_2 from '../images/blog_2.png';
import blog_3 from '../images/blog_1.png';
import blog_4 from '../images/blog_4.png';
import '../sass/pages/blogs_slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/title';


const Page = () => {

  const [blog_slider_data, setBlog_slider_data] = useState([
    { src: blog_1, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_2, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_1, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_2, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_1, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_2, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_3, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
    { src: blog_4, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false }
  ])

  const lists = ['lorem', 'ipsum', 'dollar', 'lorem', 'ipsum', 'dollar', 'lorem', 'ipsum', 'lorem', 'ipsum', 'dollar', 'lorem', 'ipsum', 'dollar', 'lorem', 'ipsum']


  const ref = useRef(null)
  const [active, setActive] = useState(0)

  function Left() {
    ref.current.scrollLeft -= 250
  }
  function right() {
    ref.current.scrollLeft += 250
  }

  return (
    <>
      <section className="all_blogs blogs_slider ">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
              <div className="parent_all_blogs parent_blogs_slider">
                <Title title={'Blogs'} />
                <div className="search_tags">
                  <div className="next_prev prev" onClick={Left}><FontAwesomeIcon icon={faChevronLeft} /></div>
                  <ul className="filters" ref={ref}>
                    {lists.map((item, index) => (
                      <li key={index} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>{item}</li>
                    ))}
                  </ul>
                  <div className="next_prev next" onClick={right}><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
                <div className="cards blog_swiper_parent">
                  {
                    blog_slider_data.map((item, index) => (
                      <Blog_card src={item.src} manage_item={item.manages} desc={item.blog_desc} date={item.blog_date} title={item.blog_title} toggle={(index) => toggle(index)} index={index} key={index} />
                    ))
                  }
                </div>
                <div className="view_all right_btn">
                  <div className="view_more plus"><span><FontAwesomeIcon icon={faPlus} /></span>View More</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Page