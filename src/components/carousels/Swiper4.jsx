import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Villas from './Villas'
import Beach  from "./Insbrucck"
import Apartments from './assets/image/Frame 43.png'


export default function App() {
  return (
    <>
      <Swiper style={{width:"100%",height:"440px"}}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}>{Villas}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Beach}</SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}><img src={Apartments} alt="" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Villas}</SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"400px"}}>{Beach}</SwiperSlide>
        <SwiperSlide style={{height:"400px",borderRadius:"10px"}}><img src={Apartments} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}