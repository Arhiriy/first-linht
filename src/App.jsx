/*шапка */
import dots from './img/Dots.svg';
import logo from './img/Subtract.svg';
/*логотип */
import vector from './img/Vector_whit.svg';
import logtipo from './img/Logtipo.svg'
/*картинка */
import frame from './img/Screenshot.svg';
/*логотипы*/
import logot1 from './img/HB.svg';
import logot2 from './img/FB.svg';
import logot3 from './img/KF.svg';
import logot4 from './img/BUSINESS INSIDER.svg';
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
/*другие продукты */
import vector_logo1 from './img/Vector_logo1.svg';
import vector_logo2 from './img/Vector_logo2.svg';
import vector_logo3 from './img/Vector_logo3.svg';
import vector_violet from './img/Vector_violet.svg';
/*список продуктов */
import button1 from './img/Button.svg';
import button2 from './img/Button (1).svg';
  /*-портреты-*/
import model1 from './img/model1.svg';
import model2 from './img/model2.svg';
import model3 from './img/model3.svg';
import model4 from './img/model4.svg';
/*функции */
import frame1 from './img/Frame1.svg';
import frame2 from './img/Frame2.svg';
import frame3 from './img/Frame3.svg';
/*качество таваров */
import frame_quality1 from './img/Frame_quality1.svg';
import frame_quality2 from './img/Frame_quality2.svg';
import frame_quality3 from './img/Frame_quality3.svg';
import frame_quality4 from './img/Frame_quality4.svg';
/*расписание */
import frome_home from './img/Frame 72.svg';

function App() {
  return (
    <div class="box-border w-25 ...">
      <header className="header">

      {/* шапка */}
      <div className="shapka">
        <div class="p-5 flex justify-between">
          <div class="pt-2">
            <img src={dots} alt="dost"></img>
          </div>
          <div class="">
            <h1 class="font-medium font-bold">SUMMER SALE UP TO 50% OFF</h1>
          </div>
          <div class="pt-2">
            <img src={dots} alt="dost"></img>
          </div>
        </div>
      </div>

      {/* логотип */}
      <div className="logo">
        <div class="p-8 flex justify-center"> 
          <div class="">
            <img src={logtipo} alt="logtipo" />
          </div>
        </div> 
      </div>

      {/* картинка */}
      <div className="frame">
        <div className="sezon "><h1 class="text-white ml-[30px] mt-[-126px] text-xl">Spring Season</h1></div>
        <div className="selka ml-[780px] mt-[-26px]">
          <p class="text-white">view collection</p>
          <img class="ml-[110px] mt-[-16px]" src={vector} alt="vestor"></img>
        </div>
      </div>

      {/* логотипы */}
      <div className="social_proof">
        <div class="p-8">
          <div class="flex justify-evenly ">
            <div><img src={logot5} alt="1"></img></div>
            <div><img src={logot4} alt="2"></img></div>
            <div><img src={logot3} alt="3"></img></div>
            <div><img src={logot2} alt="4"></img></div>
            <div><img src={logot1} alt="5"></img></div>
          </div>
        </div>
      </div>

      {/* продукты1 */}
      <div class="grid grid-cols-2">
        <div class="">
          <img src={vector1} alt="vestor1"></img>
          <img src={shirt} alt="shirt"></img>
          <img src={vector2} alt="vestor2"></img>
          <h1>Basic Shirt</h1>
          <p>€49</p>
        </div>
        <div class="">
          <img src={image} alt="image"></img>
          <a href="#explore" class="font-medium box-border h-42 w-32 p-4 border-4 rounded-lg border-black text-white bg-black">Shop Shirts</a>
        </div>
      </div>

      {/* продукты2 */}
      <div class="grid grid-cols-2">
        <div class="bg-zinc-200 p-8 rounded-lg">
          <img src={image1} alt="image1"></img>
          <a href="#explore" class="font-medium box-border h-42 w-32 p-4 border-4 rounded-lg border-black text-white bg-black">Shop Sweaters</a>
        </div>
        <div class="bg-orange-500	p-8 rounded-lg">
          <div class="">
            <h1 class="font-bold ...">“ First Light promises <br/>quality, timeless designs <br/>and with our mission it is <br/>truly a buy it for life <br/>purchase. “</h1>
          </div>
          <div class="">
            <p class="font-semibold ...">— Guera Latissa, Creative Director</p>
          </div>
        </div>
      </div>

      {/* продукты3 */}
      <div class="">
        <div class="grid grid-cols-2" > 
          <div class="ltr">
            <div class="pt-8 pb-8 pl-8 rounded-s-lg">
              <img src={image3} alt="image2"></img>
              <div>
                <p>women</p>
                <img src={vector4} alt="vestor5"></img>
              </div>
            </div>
          </div>
          <div class="rtl">
            <div class="pt-8 pb-8 pr-8 rounded-s-lg">
              <img src={image2} alt="image3"></img>
              <div>
                <p>men</p>
                <img src={vector4} alt="vestor4"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* другие продукты */}
      <div >
        <h1 class="font-bold text-center text-2xl pb-3">Hot off the press</h1>
        <div class="box-content h-32 w-62 p-10 border-2 grid grid-cols-3 p-8 ">
          <div>
            <img src={vector_logo1} alt="vestor_logo1"/>
            <h1>“First Light: Where great design <br/>and the finest materials unite in <br/>ultimate comfort”</h1>
            <div>
              <p>Read article</p>
              <img src={vector_violet} alt="vector_violet1"/>
            </div>
          </div>
          <div>
            <img src={vector_logo2} alt="vestor_logo2"/>
            <h1>“First light proves it is possible to <br/>combine great design with the <br/>finest materials available.”</h1>
            <div>
            <p>Read article</p>
            <img src={vector_violet} alt="vector_violet2"/>
            </div>
          </div>
          <div>
            <img src={vector_logo3} alt="vestor_logo3"/> 
            <h1>“Redefining excellence with <br/>premium materials and visionary <br/>robust design.”</h1>
            <div>
              <p>Read article</p>
              <img src={vector_violet} alt="vector_violet3"/>
            </div>
          </div>
        </div>
      </div>

      {/* список продуктов */}
      <div className="">
        <h1 class="font-bold text-center text-2xl pb-3">Women — Must Haves</h1>
        {/* лента продуктов */}
        <div class="flex flex-nowrap flex space-x-4 ...">
          <div class=""> {/* кнопка прокрутки на лево */}
            <img src={button1} alt="button1"/>
          </div>

          {/* товар1 */}
          <div class="p-8">
            <div class="bg-zinc-200">
              < img src={model1} alt="model1"/>
            </div>
            <div class="">
              <h1>Basic Shirt</h1>
              <p>€49</p>
            </div>
          </div>
          {/*товар2 */}
          <div class="">
            <div class="bg-zinc-200">
              <img src={model2} alt="model2"/>
            </div>
            <div class="">
              <h1>Beige Jumper</h1>
              <p>€99</p>
            </div>
          </div>
          {/*товар3 */}
          <div class="">
            <div class="bg-zinc-200">
              <img src={model3} alt="model3"/>
            </div>
            <div class="">
              <h1>Signature Jacket</h1>
              <p>€249</p>
            </div>
          </div>
          {/* товар4 */}
          <div class="">
            <div class="bg-zinc-200">
              <img src={model4} alt="model4"/>
            </div>
            <div class="">
              <h1>Navy Jumper</h1>
              <p>€538</p>
            </div>
          </div>

          <div class=""> {/* кнопка прокрутки на право */}
            <img src={button2} alt="button2"/>
          </div>
        </div>
      </div>

      {/* Функции */}
      <div class="">
        <div class="m-8">
          <h1 class="font-bold text-center text-2xl pb-3">We always have your back</h1>
          <div class="flex flex-row ...">
            {/* 1 функция */}
            <div class="pr-4">
              <img src={frame1} alt="frame1"/>
              {/* текст */}
              {/* font-medium box-border h-22 w-42 p-4 border-4 rounded-lg border-black text-white bg-black */}
              <div class="box-border h-22 w-39
               p-4 border-2 rounded-lg border-black bg-black">
                <h1 class="text-white	font-semibold text-center">100% Premium Cotton</h1>
                <p class="text-white	text-center">We use ethically sourced cotton only.</p>
              </div>
            </div>

            {/* 2-3 функция */}
            <div class="flex flex-col ...">
              <div class="">
                <img src={frame2} alt="frame2"/>
                {/* текст */}
                <div class="">
                  <h1 class="text-white	font-semibold text-center">Made in Portugal</h1>
                  <p class="text-white	text-center">With hand finished details</p>
                </div>
              </div>

              <div class="">
                <img src={frame3} alt="frame3"/>
                {/* текст */}
                <div class="">
                  <h1 class="text-white	font-semibold text-center">Breathable material</h1>
                  <p class="text-white	text-center">Keeping you cool throughout the day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* качество таваров */}
      <div class="">
        <div class="flex justify-around ...">
          {/* качество1 */}
            <div class="flex justify-start">
              <div class="">
                <img src={frame_quality1} alt="frame_quality1"/>
              </div>
              <div class="">
               <p>Premium stain <br/>resistant fabrics</p>
              </div>
            </div>
          {/* качество2 */}
            <div class="flex justify-start">
              <div class="">
                <img src={frame_quality2} alt="frame_quality2"/>
              </div>
              <div class="">
                <h1>Free Express <br/>Shipping</h1>
              </div>
            </div>
          {/* качество3 */}
            <div class="flex justify-start">
              <div class="">
                <img src={frame_quality3} alt="frame_quality3"/>
              </div>
              <div class="">
                <h1>Free returns <br/>within 30 days</h1>
              </div>
            </div>
          {/* качество4 */}
            <div class="flex justify-start">
              <div class="">
                <img src={frame_quality4} alt="frame_quality4"/>
              </div>
              <div class="">
                <h1>Customers rate <br/>us 4.8 / 5.0</h1>
              </div>
            </div>
        </div>
      </div>

      {/* расписание */}
        <div class="grid grid-cols-2">
          <div class="pt-8 pb-8 pl-8 box-content h-62 w-62">
            {/* картинка */}
            <div class="">
              <img src={frome_home} alt="frome_home"/>
            </div>
          </div>
          {/* расписание */}
          <div class="pt-8 pb-8 pr-8 box-content h-62 w-54">
            <div class="bg-white">
              <h1 class="font-bold">Visit our popup shop</h1>
              <p>Willemsparkweg 63 <br/>1071 GS Amsterdam <br/>The Netherlands</p>
                <div class="">                    <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                  <p>Friday</p>
                  <p>Saturday</p>
                  <p>Sunday</p>
                </div>
                <div class="">
                <p></p>
                  <p>12.00 - 19.00</p>
                  <p>10.00 - 19.00</p>
                  <p>10.00 - 19.00</p>
                  <p>10.00 - 21.00</p>
                  <p>10.00 - 19.00</p>
                  <p>10.00 - 18.00</p>
                  <p>12.00 - 18.00</p>
                </div>
            </div>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;

{/* 
  <div class="">

  </div>

  <img src={} alt=""/>

  <h1></h1>
  <p></p>
  */}