import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input  from 'antd/es/input/Input';
import Button from 'antd/es/button/button';
import Swiper3 from "./carousels/swiper3"
import Swiper4 from "./carousels/Swiper4"
import Swiper5 from "./carousels/swiper5"
import {SearchOutlined ,UserOutlined, TableOutlined}  from "@ant-design/icons"
import div from "../assets/image/Social.png"
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Light from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';


const Index = () => {
	const navigate = useNavigate()
	function Contact() {
		navigate('/')
	}
	return (
<div>
		<div className="page">
    <div className="page3">
		<Zoom top>
	  <div className='navbar'>
		<div className="logo">trxvl</div>
		<div className="a">
         <a href="#">Home</a>
			   <a href="#">About me</a>
			   <a href="#">Skills</a>
			   <a href="#">Projects</a>
			   <a href="#">Writeups</a>
		</div>
		</div>
    </Zoom>
		<Light>
    <h1 style={{fontSize:"50px",marginTop:"30px"}}>The whole world <br />awaits.</h1>
    </Light>
      <div className="opacity">
			<Input placeholder='Search...' style={{width:"45%"}}/><SearchOutlined style={{marginLeft:"-140px",zIndex:"2",fontSize:"12px"}} />
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
        <h5   onClick={Contact}>Deserts</h5>
      </div>
      <div>
        <div className='mount'></div>
        <h5>Mountains</h5>
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
<h2 className='h2' style={{marginTop:"20px"}}>Top Vacation Descriptions</h2>
  </Light>    
 <Zoom>
 <Swiper3 className="Swiper3"/>
 </Zoom>
			</div>
      <br /><br />
          <div className="page2">
  <div className="offers">
      <br />
    <br />
  <Zoom>
    <Swiper4/>
  </Zoom>
    </div>
    <br />
    <div className="vacations">
    <Zoom>
    <Swiper5/>
    </Zoom>
    </div>
	</div>
	</div>
  <div className="footer">
     <Fade left>
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
     </Fade>
     <Fade right>
     <div className="divone">
        <Button>Helmet KOD</Button>
        <img className='footerimg' src={div} alt="" />
     </div>
     </Fade>
    </div>
</div>
	);
}

export default Index;

