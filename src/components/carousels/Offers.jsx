import Frame1 from "./assets/image/Frame 31.png"
import { Button } from 'antd';

export default function App() {
  return (
    <>
       <div className="mySwip" style={{display:"flex",padding:"10px",gap:"10px",height:"150px",border:"1px solid lightgrey",borderRadius:"10px"}}>
            <img style={{width:"55%"}} src={Frame1} alt="" />
            <div className="swip">
                  <p style={{fontSize:"10px",color:"grey"}}>Domestic Flights</p>
                  <p style={{fontSize:"12px",marginTop:"10px"}}>Huge savings on flights width trxvl</p>
                  <p style={{fontSize:"7px",color:"grey",marginTop:"15px"}}>Book domestic flights starting @ just $1459</p>
                  <br />
                  <Button style={{fontSize:"10px",background:"blue",borderRadius:"15px",color:"white"}}>Book Now</Button>
            </div>
          </div>
    </>
  );
}