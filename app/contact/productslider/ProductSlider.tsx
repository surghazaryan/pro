'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface Props {
    images: any[];
    title: string;
}

export default function ProductSlider({ images, title }: Props) {
    return (
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 p-3">
            <Swiper navigation={true} modules={[Navigation]} className="rounded-xl overflow-hidden">
                {
                    images?.map((img: any, index: number) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <img
                                src={img.src}
                                alt={`${title} - ${index}`}
                                className="w-full  object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}