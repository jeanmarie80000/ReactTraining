import Cart from "./profil";
import '../styles/Banner.css';
import logo from '../assets/logo.png';

export default function Banner() {

    const title = "Jardin";

    return ( 
        <div>
            <div className="jardinBanner">
                <img src={logo} alt='jardinTitle' className="jardinTitle" />
                <h2 className="jardinBannerTitle">{ title }</h2>
            </div>
            <div>
                <Cart />
            </div>
        </div>
    );
}
