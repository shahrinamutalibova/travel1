import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate()
  console.log(navigate);
  function Contact(){
      navigate("/")
  }
  return (
    <div>
           <div className='div1'>
           <div className='nav'>
      </div>
    <div style={{padding:"50px"}}>
    <h1 style={{fontSize:"50px",marginTop:"-25px"}}>The whole world <br /> awaits.</h1>
     <div style={{width:"100%",borderRadius:"10px",marginTop:"20px",marginBottom:"20px",height:"35px",opacity:".6",backgroundColor:"white",overflow:"hidden"}}>

     </div>
    <h2>Top categories</h2>
    <div  className='categories' style={{display:"flex",marginTop:"30px"}}>
      <div>
        <div className='beach'></div>
        <h5>Beaches</h5>
      </div>
      <div>
        <div className='desert'></div>
        <h5 onClick={Contact}>Deserts</h5>
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
    <br />
    <h2>Popular Beach Destinations</h2>
    <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://rare-gallery.com/uploads/posts/6239-hd-nature-wallpaper-pack-free-download__hd-nature-wallpaper-pack-free-download.jpg" height={'100%'} width="250" alt="" />
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
    <h2 style={{color:"black"}}>Recently Viewed</h2>
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

    <h2 style={{color:"black"}}>All Inclusive Packages!</h2>
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

    <h2 style={{color:"black"}}>Honeymoon Freebies Special</h2>
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

    </div>
   <div className="footer"></div>
   </div>
    </div>
  );
}

export default Index;
