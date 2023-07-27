import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Villas from './assets/image/Frame 75.png'
import Resorts from './assets/image/Frame 76.png'

export default function App() {
  return (
    <>
      <Swiper style={{width:"100%",height:"300px",padding:"0"}}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Resorts} alt="Resorts" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Villas} alt="Villas" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Resorts} alt="Resorts" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Villas} alt="Villas" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Resorts} alt="Resorts" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Villas} alt="Villas" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Resorts} alt="Resorts" /></SwiperSlide>
        <SwiperSlide style={{borderRadius:"10px",height:"280px"}}><img src={Villas} alt="Villas" /></SwiperSlide>
      </Swiper>
    </>
  );
}