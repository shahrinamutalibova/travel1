import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Villas from './Insbrucck'
import Resorts from './Villas'
import Apartments from './Ushuaia'

export default function App() {
  return (
    <>
      <Swiper style={{width:"100%",height:"420px"}}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swipper" style={{height:"400px",borderRadius:"10px"}}>
          {Apartments}
        </SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>
          {Resorts} 
        </SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>
         {Villas}
        </SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>
          {Apartments}
        </SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>
          {Resorts} 
        </SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>
          {Villas}
        </SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>
          {Villas}
        </SwiperSlide>
      </Swiper>
    </>
  );
}