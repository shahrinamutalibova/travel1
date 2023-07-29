import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input  from 'antd/es/input/Input';
import Button from 'antd/es/button/button';
import Swiper from "./carousels/Swiper"
import Swiper1 from "./carousels/swiper1"
import Swiper2 from "./carousels/Swiper2"
import SwiperHome from "./carousels/Swiperhome"
import {SearchOutlined ,UserOutlined, TableOutlined}  from "@ant-design/icons"
import Google from "../assets/image/image 23.png"
import App from "../assets/image/image 22.png"
import div from "../assets/image/Social.png"
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Light from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';








const Index = () => {
	const navigate = useNavigate()
	function toContact() {
		navigate('/route')
	}
	return (
<div>
		<div className="page">
			<div className="page1">
<Zoom top>
<div className='navbar'>
		<div className="logo">trvxl</div>
		<div className="a">
               <a href="#">Home</a>
			   <a href="#">About me</a>
			   <a href="#">Skills</a>
			   <a href="#">Projects</a>
			   <a href="#">Writeups</a>
		</div>
		</div>
</Zoom>
<Light top>
<h1 style={{fontSize:"50px",marginTop:"30px"}}>The whole world <br />awaits.</h1>
</Light>
<div className="opacity">
			<Input placeholder='Search...' style={{width:"45%"}}/><SearchOutlined style={{marginLeft:"-140px",zIndex:"2",fontSize:"14px",opacity:".4"}} />
        <div style={{display:"flex",gap:"5px"}}>
        <TableOutlined/>
        <p>change in</p>
        </div>
       <div style={{display:"flex",gap:"5px"}}>
       <UserOutlined />
				<p>change out</p>
       </div>
			<Button style={{width:"60px",fontSize:"10px",height:"26px",color:"blue",border:"1px solid blue"}}>Search</Button>
			</div>
			<Light>
      <h2 style={{marginTop:"20px"}}>Top categories</h2>
      </Light>
      <br />
 <Light>
 <div  className='categories' style={{display:"flex",marginTop:"30px"}}>
      <div>
        <div className='beach'></div>
        <h5>Beaches</h5>
      </div>
      <div>
        <div className='desert'></div>
        <h5 >Deserts</h5>
      </div>
      <div>
        <div className='mount'></div>
        <h5 onClick={toContact}>Mountains</h5>
      </div>
    <div>
        <div className='City'></div>
        <h5>Iconic Cities</h5>
      </div>
      <div>
        <div className='home'></div>
        <h5>Houseboats</h5>
      </div>
      <div>
        <div className='count'></div>
        <h5>Countryside</h5>
      </div>
      <div>
        <div className='camping'></div>
        <h5>Camping</h5>
      </div>
      <div>
        <div className='castles'></div>
        <h5>Castles</h5>
      </div>
      <div>
        <div className='skiing'></div>
        <h5>Skiing</h5>
      </div>
      <div>
        <div className='tropical'></div>
        <h5>Tropical</h5>
      </div>
    </div>
 </Light>
	<Light>
  <h2 style={{marginTop:"20px"}}>Top Vacation Descriptions</h2>
  </Light>
  <br />
  <br />
<Zoom>
 <Swiper/>
  </Zoom>			
  </div>
	<div className="page2">
   <Zoom >
   <Swiper1/>
   </Zoom>
    <br />
      <br /><br />
   <Zoom>
     <SwiperHome/>
   </Zoom>
    <Roll>
    <div className="plan"></div>
    </Roll>
    <Zoom>
    <Swiper2/>
     </Zoom>
      </div>
	</div>
    <Fade left>
    <div className="app">
    <div className="iphone"></div>
        <div className='div1'>
          <h1 style={{color:"white"}}>Your all-in-one travel app.</h1>
          <br />
           <p style={{color:"white"}}>Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>
           <br />
          <div style={{display:"flex"}}>
            <div style={{width:"75%"}}>
            <Button className='btn'>Mobil</Button>
           <Button>Email</Button> <br /><br />
        <div style={{display:"flex",width:"100%"}}>   <Input className='input' placeholder='+91 Mobile Number' /> <Button className='btn1' style={{marginLeft:"-90px",marginTop:"3px"}}>Search</Button></div>
            </div>
            <div style={{height:"25%"}}>
              <img style={{width:"130px",height:"40px"}} src={<Google/>} />
              <img style={{width:"130px",height:"40px"}} src={<App/>}/>
            </div>
          </div>
        </div>
    </div>
    </Fade>
		<Fade right>
    <div className="footer">
     <div className="divs">
      <div className="divv">
        <h1>Trxvl</h1>
      </div>
     <div className="div2">
        <a href="#">Seslendirme ve Alt Jazz</a><br />
        <a href="#">Media Market</a><br />
        <a href="#">Gillie</a><br />
        <a href="#">Size Last</a><br />
      </div>
      <div className="div3">
        <a href="#">Self Betimes</a><br />
        <a href="#">Yatırımcı İlişkileri</a><br />
        <a href="#">Basal Himmler</a><br />
      </div>
      <div className="div4">
        <a href="#">Yard Market</a><br />
        <a href="#">Is İmkanları</a><br />
        <a href="#">Car Tercihleri</a><br />
      </div>
      <div className="div5">
       <a href="#">Hedge Karla</a><br />
       <a href="#">Mullein Koşulları</a><br />
       <a href="#">Autumnal Bulgier</a> <br />
      </div>
     </div>
     <div className="divone">
        <Button>Helmet KOD</Button>
        <img className='footerimg' src={div} alt="" />
     </div>
    </div>
    </Fade>
</div>
	);
}

export default Index;

