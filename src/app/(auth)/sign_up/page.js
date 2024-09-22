'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import rectangle from '../../images/rectangle.png';
import girl from '../../images/girl.png';
import '../../sass/pages/sign_up.scss';
import Sign_up_detail from '@/app/components/sign_up_detail';
import Sign_up_adress from '@/app/components/sign_up_adress';
import Sign_up_password from '@/app/components/sign_up_password';
import Title from '@/app/components/title';


const Page = () => {
  const [step, setStep] = useState(1)
  return (
    <>
      <section className="sign_up">
        <div className="parent_sign_up">
          <div className="left">
            <div className="inner_left">
              <Title title={'Sign Up'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.'} />
              <div className="girl_image">
                <Image src={girl} alt='girl' title='...' priority={false} loading='lazy' />
              </div>
            </div>
            <div className="back_image">
              <Image src={rectangle} alt='rectangle' title='...' priority={false} loading='lazy' />
            </div>
          </div>
          <div className="right">
            <div className="inner_right">
              <div className="upper_area">
                <div className="bar">
                  <div className={`bar_initial ${step === 2 && 'bar_fifty'} ${step === 3 && 'bar_full'}`}></div>
                  <div className="bar_circle">
                    <div className="circle circle_0"></div>
                    <div className={`circle circle_1 ${step === 3 || step === 2 ? 'circle_0' : ''}`}></div>
                    <div className={`circle circle_2 ${step === 3 ? 'circle_0' : ''}`}></div>
                  </div>
                </div>
              </div>
              <div className="lower_area">
                {step === 1 && <Sign_up_detail step={step} setStep={setStep} />}
                {step === 2 && <Sign_up_adress step={step} setStep={setStep} />}
                {step === 3 && <Sign_up_password />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page