'use client'
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import goku from '../images/goku.jpg';
import { motion } from 'framer-motion';
import '../sass/pages/card.scss';

const Blog_card = ({ src, desc, date, title, heart, regular_heart, id, index }) => {

    const [toggle, setToggle] = useState(false);

    const addCard = (ind) => {
        let card = {
            src: src,
            desc: desc,
            date: date,
            title: title,
            liked_heart: 'Liked',
            id: id,
            index: ind
        }

        const check = JSON.parse(localStorage.getItem('card')) || [];
        const exist = check.some(item => item.index === ind);

        if (!exist) {
            check.push(card)
            localStorage.setItem('card', JSON.stringify(check))
            setToggle(true)
        }
        else {
            const card_index = check.findIndex(item => item.index === ind)
            if (card_index !== -1) {
                check.splice(card_index, 1)
                localStorage.setItem('card', JSON.stringify(check));
                setToggle(false)
            }
        }
    }

    return (
        <motion.div className="blog_item card_item wishlist_card_item"
            initial={{
                translateY: 30,
                opacity: 0
            }}
            whileInView={{
                translateY: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.1,
                delay: index * 0.1
            }}

        >
            <div className="blog_image">
                <Image src={goku} alt='blog_1' title='...' priority={false} />
            </div>
            <div className="blog_content">
                <div
                    className="date">
                    {isNaN(new Date(date)) ? 'Date Unavailable' : new Date(date).toDateString()}
                </div>
                <h4>
                    {title}
                </h4>
                <div className='detail' dangerouslySetInnerHTML={{ __html: desc.slice(0, 150).concat('...') }}></div>
                <Link
                    className='link'
                    href={`/blog_detail/${id}`}
                    prefetch
                >
                    Read More
                    <span>
                        <FontAwesomeIcon icon={freeSolidSvgIcons.faArrowRight} />
                    </span>
                </Link>
            </div>
            <div className="heart"
                onClick={() => addCard(index)}
            >
                {
                    toggle ?
                        heart
                        :
                        regular_heart
                }
            </div>
        </motion.div>
    )
}

export default Blog_card;