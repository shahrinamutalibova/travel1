import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Villas from './assets/image/Frame 31 (2).png'
import Resorts from './assets/image/Frame 38.png'
import Apartments from './assets/image/image 18 (3).png'


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
        className="mySwiper"
      >
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Apartments} alt="" /></SwiperSlide>
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Resorts} alt="" /></SwiperSlide>
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Villas} alt="" /></SwiperSlide>
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Apartments} alt="" /></SwiperSlide>
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Resorts} alt="" /></SwiperSlide>
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Villas} alt="" /></SwiperSlide>
        <SwiperSlide style={{width:"30%",borderRadius:"10px",height:"200px"}}><img src={Villas} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}