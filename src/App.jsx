/*шапка */
import dots from './img/Dots.svg';
import logo from './img/Subtract.svg';
/*логотип */
import frame from './img/Screenshot 2024-03-13 at 11.09 1.svg';
import vector from './img/Vector_whit.svg';
/*логотипы*/
import logot1 from './img/HB.svg';
import logot2 from './img/FB.svg';
import logot3 from './img/KF.svg';
import logot4 from './img/BI.svg';
import logot5 from './img/Numero.svg';
/*продукты1 */
import vector1 from './img/Vector1.svg';
import vector2 from './img/Vector2.svg';
import shirt from './img/shirt 1.svg';
/*продукты2 */
import image from './img/image 1.svg';
import image1 from './img/image 2.svg';
/*продукты3 */
import image2 from './img/image 3.svg';
import image3 from './img/image 4.svg';
import vector4 from './img/Vector_blac.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
      <div className="shapka">
        <img src={dots} alt="dost"></img>
        <h1>SUMMER SALE UP TO 50% OFF</h1>
        <img src={dots} alt="dost"></img>
      </div>

      <div className="logo">
      <h1>FIRST</h1>
      <img src={logo} alt="Organick Logo" />
      <h1>LIGHT</h1>
      </div>

      <div className="frame">
        <img src={frame} alt="frame"></img>
        <div className="sezon"><h1>Spring Season</h1></div>
        <div className="selka">
          <p>view collection</p>
          <img src={vector} alt="vestor"></img>
        </div>
      </div>

      <div className="social_proof">
        <div class="flex justify-around ...">
          <div><img src={logot1} alt="1"></img></div>
          <div><img src={logot2} alt="2"></img></div>
          <div><img src={logot3} alt="3"></img></div>
          <div><img src={logot4} alt="4"></img></div>
          <div><img src={logot5} alt="5"></img></div>
        </div>
      </div>

      <div className="product1">
        <div className="prod1">
          <img src={vector1} alt="vestor1"></img>
          <img src={shirt} alt="shirt"></img>
          <img src={vector2} alt="vestor2"></img>
          <h1>Basic Shirt</h1>
          <p>€49</p>
        </div>
        <div className="prod2">
          <img src={image} alt="image"></img>
          <a href="#explore" className="shop-button">Shop Shirts</a>
        </div>
      </div>

      <div className="product2">
        <div className="prod3">
        <img src={image1} alt="image1"></img>
        <a href="#explore" className="shop-button">Shop Sweaters</a>
        </div>
        <div className="prode4">
          <h1>“ First Light promises <br/>quality, timeless designs <br/>and with our mission it is <br/>truly a buy it for life <br/>purchase. “</h1>
          <p>— Guera Latissa, Creative Director</p>
        </div>
      </div>

      <div className="product3">
        <div className="prod5">
          <img src={image2} alt="image2"></img>
          <div>
            <p>women</p>
            <img src={vector4} alt="vestor5"></img>
          </div>
        </div>
        <div className="prod6">
          <img src={image3} alt="image3"></img>
          <div>
            <p>men</p>
            <img src={vector4} alt="vestor4"></img>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Hot off the press</h1>

        </div>
      </div>
      </header>
    </div>
  );
}

export default App;