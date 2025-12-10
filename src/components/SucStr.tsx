import './sucstr.css';
import Aditya from "../assets/images/Aditya.jpg";
import Ayush from "../assets/images/Ayush.jpg";
import Chaitanya from "../assets/images/Chaitanya.jpg";
import Eshika from "../assets/images/Eshika.jpg";
import Kanay from "../assets/images/Kanay.jpg";
import Piyush from "../assets/images/Piyush.jpg";
import Purvesh from "../assets/images/Purvesh.jpg";


export default function SucStr(){
    return (
        <>
            <h2 className="result-heading">RESULTS</h2>

            <div className="slider">
            <div className="slide-track">

                <div className="slide">
                    <img src={Aditya}/>
                </div>
                <div className="slide">
                    <img src={Ayush}/>
                </div>
                <div className="slide">
                    <img src={Chaitanya}/>
                </div>
                <div className="slide">
                    <img src={Eshika}/>
                </div>
                <div className="slide">
                    <img src={Kanay}/>
                </div>
                <div className="slide">
                    <img src={Piyush}/>
                </div>
                <div className="slide">
                    <img src={Purvesh}/>
                </div>

                <div className="slide">
                    <img src={Aditya}/>
                </div>
                <div className="slide">
                    <img src={Ayush}/>
                </div>
                <div className="slide">
                    <img src={Chaitanya}/>
                </div>
                <div className="slide">
                    <img src={Eshika}/>
                </div>
                <div className="slide">
                    <img src={Kanay}/>
                </div>
                <div className="slide">
                    <img src={Piyush}/>
                </div>
                <div className="slide">
                    <img src={Purvesh}/>
                </div>

            </div>
        </div>
        </>
    );
}