import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Button } from 'antd';
import Offers from "./Offers"

export default function App() {
  return (
    <>
      <Swiper style={{width:"100%",height:"220px"}}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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