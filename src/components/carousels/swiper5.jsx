import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Villas from './Villas'
import Resorts from './Insbrucck'
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
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Apartments}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Resorts}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Apartments}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Resorts}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
      </Swiper>
    </>
  );
}