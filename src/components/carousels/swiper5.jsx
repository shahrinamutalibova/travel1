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
        className="Swipper2"
      >
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Resorts}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Apartments}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Apartments}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Resorts}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
      </Swiper>
    </>
    
  );
}