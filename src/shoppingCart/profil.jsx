import '../styles/Shoppingcart.css';


export default function Cart() {

    const Monstera = 8;
    const Ivy = 10;
    const Flower = 15;

    return (
        <div className="jardinCart">
            <ul className='jardinBackGround'>
                <li className='jardinBackGround'>Monstera : {Monstera}€</li>
                <li className='jardinBackGround'>Lierre : {Ivy}€</li>
                <li className='jardinBackGround'>Fleurs : {Flower}€</li>
            </ul>
            <div>
                <h4 className='jardinBackGround'>Total : { Monstera + Ivy + Flower }€</h4>
            </div>
        </div>
    );
}