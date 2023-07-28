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
      <Swiper
        slides-per-view={3}
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
        className="Swipper1"
      >
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