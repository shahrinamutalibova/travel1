import React from 'react';
import Frame1 from './assets/image/Frame 31 (12).png'
import Frame2 from './assets/image/ic_baseline-flight.png'
import Frame3 from './assets/image/ri_hotel-line.png'
import Frame4 from './assets/image/cil_car-alt.png'
import Frame5 from './assets/image/iconoir_trekking.png'


const Villas = () => {
    return (
        <div style={{ padding: "10px", border: "1px solid lightgrey", borderRadius: "10px" }}>
            <div className='carousel'>
                <img style={{ width: "100%", height: "150px" }} src={Frame1} alt="" />
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4>Insbrucck</h4>
                   <h4> 4.9</h4>
                </div>
                <p style={{ color: "grey", fontSize: "12px" }}>3Days Nights</p>
                <br />
                <div style={{ display: "flex", gap: "10px", textAlign: "center" }} className="div">
                    <div style={{ width: "22%" }}>
                         <img style={{width:"30px",height:"30px"}} src={Frame2} alt="" />
                        <p style={{ color: "grey", fontSize: "12px" }}>2 Flights </p>
                    </div>
                    <div style={{ width: "22%" }}>
                    <img  style={{width:"30px",height:"30px"}}src={Frame3} alt="" />                        
                        <p style={{ color: "grey", fontSize: "12px" }}>1 Hotel </p>
                    </div>
                    <div style={{ width: "22%" }}>
                    <img style={{width:"30px",height:"30px"}} src={Frame4} alt="" />
                        <p style={{ color: "grey", fontSize: "12px" }}>2 Transfers </p>
                    </div>
                    <div style={{ width: "22%" }}>
                    <img style={{width:"30px",height:"30px"}} src={Frame5} alt="" />                        
                        <p style={{ color: "grey", fontSize: "12px" }}>4 Activities </p>
                    </div>
                </div>
                <ul style={{ marginLeft: "15px" }}>
                    <li>
                        <p style={{ color: "grey", fontSize: "12px" }}>Tour combo width return airport transfer</p>
                    </li>
                    <li><p style={{ color: "grey", fontSize: "12px" }}>City Tour </p></li>
                    <li><p style={{ color: "grey", fontSize: "12px" }}>Curiours Corner </p> </li>
                    <center>
                        <h3 style={{ color: "black" }}>$88,952<sub><p style={{ color: "grey", fontSize: "12px" }}></p></sub></h3>
                    </center>                    </ul>
            </div>
        </div>
    );
}

export default Villas;