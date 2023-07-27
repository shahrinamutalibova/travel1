import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input  from 'antd/es/input/Input';
import Button from 'antd/es/button/button';
import Swiper3 from "./carousels/swiper3"
import Swiper4 from "./carousels/Swiper4"
import Swiper5 from "./carousels/swiper5"
import {SearchOutlined ,UserOutlined, TableOutlined}  from "@ant-design/icons"


const Index = () => {
	const navigate = useNavigate()
	function Contact() {
		navigate('/')
	}
	return (
<div>
		<div className="page">
			<div className="page3">
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
			<h1 style={{fontSize:"50px",marginTop:"30px"}}>The whole world <br />awaits.</h1>
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
			<h2 style={{marginTop:"20px"}}>Top categories</h2>
      <br />
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
      <h2 style={{marginTop:"20px"}}>Top Vacation Descriptions</h2>
    <Swiper3/>
			</div>
      <div className="page2">
    <div className="offers">
      <br />
    <h2 style={{marginTop:"20px",color:"black",marginLeft:"10px"}}>Offers</h2>
    <br />
    <Swiper4/>
    </div>
    <br />
    <div className="vacations">
    <Swiper5/>
    </div>
	</div>
	</div>
		<div className="footer"></div>
</div>
	);
}

export default Index;

