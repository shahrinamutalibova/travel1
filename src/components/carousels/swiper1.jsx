import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Button } from 'antd';
import Offers from "./Offers"

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwip"
      >
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
         <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
           <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
         <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
           <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
         <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
           <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
         <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
           <Offers/>
        </SwiperSlide>
        <SwiperSlide style={{height:"180px",borderRadius:"10px"}}>
        <Offers/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}