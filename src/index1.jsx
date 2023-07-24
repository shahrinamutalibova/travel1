import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input  from 'antd/es/input/Input';
import Button from 'antd/es/button/button';

const Index = () => {
	const navigate = useNavigate()
	function toContact() {
		navigate('/route')
	}
	return (
<div>
			<div className='navbar'>
				<nav>
					<div className="logo">
						trvxl
					</div>
					<div className="a">
						<a href="#">Home</a>
						<a href="#">About me</a>
						<a href="#">Skills</a>
						<a href="#">Writeups</a>
					</div>
				</nav>
				<div className="page">
				<h1>The whole world <br /> awaits.</h1>
				<div className='opacity'><Input style={{width:"45%"}}></Input> <Button >Search</Button></div>
				<h2>Top categories</h2>
				<div className='categories' style={{display:"flex",marginTop:"30px"}}>
				<div>
					<div className='beach'></div>
					<h5>Beaches</h5>
				</div>
				<div>
					<div className='desert'></div>
					<h5>Deserts</h5>
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
				<div className='tropical'>
					<div className='tropical'></div>
					<h5>Tropical</h5>
				</div>
				</div>
				<h2>Top Vacation Destinations</h2>
				<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649205187_65-vsegda-pomnim-com-p-bali-indoneziya-priroda-foto-76.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpaper-house.com/data/out/12/wallpaper2you_541502.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://bearbonesgear.com/wp-content/uploads/2015/11/bright_nature_sun_wallpaper-1.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/6239-hd-nature-wallpaper-pack-free-download__hd-nature-wallpaper-pack-free-download.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d6/fb/35/d6fb354f239d0c4c88f881dfb1472760.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/1078090-sunlight-trees-landscape-nature-grass-sky-plants-field-photography-green-morning-summer-tree-grassland-plant-pasture-agriculture-meadow-plain-lawn-prairie-crop-rural-ar.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/10/91/44/1091441c84e9d3da00990c6fdc42e89d.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/beautiful-landscape-pictures-x10zwstd91l4jnb3.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d1/03/29/d103296730b7a3112a209fe33725c112.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://ink-project.ru/sites/1-ink-project/photoalbums/18485.jpg" height="100" width="250" alt="" />
		</div>
	</div>
               </div>
               <h3 style={{color:"black"}}>Offers</h3>
			   <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<div style={{display:"flex",color:"black",width:"100%"}}>
				<div style={{width:"50%"}}>
				<img style={{width:"100%"}} src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649205187_65-vsegda-pomnim-com-p-bali-indoneziya-priroda-foto-76.jpg" height="100" width="250" alt="" />
				</div>
				<div style={{width:"50%"}}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sit, temporibus quo eaque quasi nisi! Dolorem ipsum vel vitae quod.
				</div>
			</div>
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpaper-house.com/data/out/12/wallpaper2you_541502.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://bearbonesgear.com/wp-content/uploads/2015/11/bright_nature_sun_wallpaper-1.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/6239-hd-nature-wallpaper-pack-free-download__hd-nature-wallpaper-pack-free-download.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d6/fb/35/d6fb354f239d0c4c88f881dfb1472760.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/1078090-sunlight-trees-landscape-nature-grass-sky-plants-field-photography-green-morning-summer-tree-grassland-plant-pasture-agriculture-meadow-plain-lawn-prairie-crop-rural-ar.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/10/91/44/1091441c84e9d3da00990c6fdc42e89d.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/beautiful-landscape-pictures-x10zwstd91l4jnb3.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d1/03/29/d103296730b7a3112a209fe33725c112.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://ink-project.ru/sites/1-ink-project/photoalbums/18485.jpg" height="100" width="250" alt="" />
		</div>
	</div>
               </div>
               <h3 style={{color:"black"}}>Browse by property type</h3>
			   <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649205187_65-vsegda-pomnim-com-p-bali-indoneziya-priroda-foto-76.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpaper-house.com/data/out/12/wallpaper2you_541502.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://bearbonesgear.com/wp-content/uploads/2015/11/bright_nature_sun_wallpaper-1.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/6239-hd-nature-wallpaper-pack-free-download__hd-nature-wallpaper-pack-free-download.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d6/fb/35/d6fb354f239d0c4c88f881dfb1472760.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/1078090-sunlight-trees-landscape-nature-grass-sky-plants-field-photography-green-morning-summer-tree-grassland-plant-pasture-agriculture-meadow-plain-lawn-prairie-crop-rural-ar.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/10/91/44/1091441c84e9d3da00990c6fdc42e89d.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/beautiful-landscape-pictures-x10zwstd91l4jnb3.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d1/03/29/d103296730b7a3112a209fe33725c112.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://ink-project.ru/sites/1-ink-project/photoalbums/18485.jpg" height="100" width="250" alt="" />
		</div>
	</div>
               </div>
			   <div className="slider1">
			   <div className='plan'>

</div>
			   </div>
<h3 style={{color:"black"}}>Connect with other travelers in our community</h3>
<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="./assets//image//Frame 76.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/quiet-forest-lake-landscape-jgdyqntrcdbt43ma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpaper-house.com/data/out/12/wallpaper2you_541502.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://bearbonesgear.com/wp-content/uploads/2015/11/bright_nature_sun_wallpaper-1.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/6239-hd-nature-wallpaper-pack-free-download__hd-nature-wallpaper-pack-free-download.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://img3.goodfon.ru/original/2560x1600/4/44/gory-derevya-polyanka-doma.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d6/fb/35/d6fb354f239d0c4c88f881dfb1472760.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/1078090-sunlight-trees-landscape-nature-grass-sky-plants-field-photography-green-morning-summer-tree-grassland-plant-pasture-agriculture-meadow-plain-lawn-prairie-crop-rural-ar.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/10/91/44/1091441c84e9d3da00990c6fdc42e89d.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://wallpapers.com/images/hd/beautiful-landscape-pictures-x10zwstd91l4jnb3.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.pinimg.com/originals/d1/03/29/d103296730b7a3112a209fe33725c112.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://ink-project.ru/sites/1-ink-project/photoalbums/18485.jpg" height="100" width="250" alt="" />
		</div>
	</div>
</div>
		 <div className='app' style={{width:"100%",height:"80vh",display:"flex"}}>
	 <div className='iphone'>
 
	 </div>
	 <div style={{width:"78%"}}>
		 <h1>Your all-in-one travel app.</h1>
		 <h6 style={{fontSize:"18px"}}>Book flights, hotels, trains & rental cars anywhere in the world in just <br /> seconds. Get real-time flight updates, travel info, exclusive <br /> deals, and 30% more Trip Coins only on the app!</h6>
		 <div style={{display:"flex",gap:"30px"}}>
		 <div style={{width:"50%"}}>
		 <button className='btn'>Mobile</button>
		 <button style={{marginLeft:"20px"}} className='btn'>Email</button>
			 <p style={{fontSize:"14px"}}>Enter your phone number to receive a text with a link to download the app.</p>
		 <div style={{display:'flex'}}>
			 <Input placeholder=' +91 Mobile number' type="text" /><Button style={{marginLeft:"-50px",zIndex:'2'}}>Search</Button>
		 </div>
		 </div>
		 <div style={{width:"50%"}}>
			 <div className='d'></div>
			 <div className='d1'></div>
		 </div>
		 </div>
	 </div>
	 </div>
				 <div className='footer'></div>
				</div>
			</div>
		 </div>
	);
}

export default Index;

