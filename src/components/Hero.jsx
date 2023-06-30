import React, { Fragment } from 'react';
import { hero } from '../constants';
import { downArrow } from '../assets';
import Button from './Button';

import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fragment>
        <section>
            {hero.map(({id,img,title,desc,button})=>{
                return(
                    <div key={id} className='relative flex flex-col items-center justify-center'>
                        <img src={img} className='h-screen w-full object-cover'/>
                        <div className='absolute top-6 flex flex-col h-screen w-full items-center justify-between'>
                        <Fade bottom>
                            <div className='flex flex-col items-center justify-between'>
                            <h1 className='text-4xl font-medium'>{title}</h1>
                            <p className='text-xl'>{desc}</p>
                            </div>
                        </Fade>
                            <div className='w-full flex flex-col gap-y-6 sm:flex'>
                                <Button button={button} />
                                <img src={downArrow} className='mb-12 h-8 animate-bounce'/>
                            </div>
                        </div>

                    </div>
                )
            })}
        </section>
    </Fragment>
  )
}

export default Hero
