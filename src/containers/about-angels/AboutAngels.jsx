import React from 'react'
import './AboutAngels.css'
import { Teamcard } from '../../components'

function AboutAngels() {
    const teamArr = [
        {
            name: 'Nandit',
            image: '/nandit.jpg',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/nanditmehra'
        },
        {
            name: 'Ravish',
            image: '/ravish.jpg',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/ravish1729'
        },
    ]
    return (
        <div className='section__padding angels_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>Our Angels</p>

                <p className='description__text'>
                    Our mentors and investors believes in our vision and empower us to acheive it.
                </p>
            </div>

            <div className="angels">
                <div className="angels__image">
                    <img src="/angels/Balaji-Srinivasan.png" alt="angelImage" />
                </div>
                <div className="angels__description">
                    <p className="name">Balaji Srinivasan</p>
                    <p className="text">Balaji Srinivasan is an entrepreneur and essayist. He was co-founder of Counsyl, and is the former chief technology officer of Coinbase and former general partner at Andreessen Horowitz.</p>
                </div>
            </div>


        </div>
    )
}

export default AboutAngels