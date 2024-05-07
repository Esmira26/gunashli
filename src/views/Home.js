import React, {useEffect, useState} from 'react'
import img1 from '../img/gunesli logo white-01 (1).png'
import img2 from '../img/house1.png'
import img3 from '../img/house5.png'
import img4 from '../img/house3.png'
import img5 from '../img/insan1.jpg'
import img6 from '../img/house.png'
import Mehsul from '../components/Mehsul'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import '../css/Home.css'
// import $ from 'jquery';
// import Slider from 'react-slick'



function Home() {
    // window.onload = function () {
    //     $('.slider').slick({
    //         autoplay: true,
    //         arrows: true,
    //         prevArrow: '<button type="button" class="slick-prev"></button>',
    //         nextArrow: '<button type="button" class="slick-next"></button>',
    //         centerMode: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 2
    //     });
    // };
  const [products,setProducts] = useState([]);

  useEffect(() => {

    AOS.init();

    axios.get('https://localhost:7039/api/Home').then(res=>{
      setProducts(res.data)
    })
  }, []);
  return (
    
    <>
      <header>
        <hr />
        <div className="ust">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <ul>
            <li><NavLink to="/">Əsas səhifə</NavLink></li>
            <li><NavLink to="/xidmetler">Xidmətlər</NavLink></li>
            <li><NavLink to="/Products">Layihələr</NavLink></li>
            <li><NavLink to="/haqqimizda">Haqqımızda</NavLink></li>
            <li><a href="#orta">Əlaqə</a></li>
            <li><NavLink to="/AddProduct">Esmira</NavLink></li>
          </ul>
        </div>
        <div className="umumi">
          <div className="yazi">
            <h1>Xəyal Etdiyiniz Evi Bizimlə Tikin</h1>
          </div>
          <a href="react1.html">Mövcud olan evlərimiz<i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </header>
      <section className="orta3">
        <div className="umumorta" data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">
        <div className="orta4" >
            <div className="orta5"><img src={img2} alt=""/></div>
        </div>
        <div className="yazi1">
            <h1>Əsas planlama</h1>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. agnam eveniet officia amet consectetur adipisicing elit.</p>
        </div>
    </div>
        <div className="umumorta">
        <div id="orta4">
            <div id="orta5"><img src={img3} alt=""/></div>
        </div>
        <div className="yazi1">
            <h1>Ənənəvi dizaynlar</h1>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. agnam eveniet officia amet consectetur adipisicing elit.</p>
        </div>
    </div>
        <div className="umumorta" data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">
        <div className="orta4">
            <div className="orta5"><img src={img4} alt=""/></div>
        </div>
        <div className="yazi1">
            <h1>Keyfiyyətli materiallar</h1>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. agnam eveniet officia amet consectetur adipisicing elit.</p>
        </div>
    </div>
    </section>
    <div className="elanlar">
        <h2>Elanlar</h2>
        <div className="elan1">
            {
              products.slice(0, 6).map(product=>{
                return <Mehsul p={product} key={product.productId}/>
              })
            }
        </div>
        </div>
        <div className="slider">
            <div className="slide">
              <div className="star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>Həqiqətəndə çox gözəl əl işləri var, Əhsən sizə. Evimi çox tez bir zamanda gözəl təmir ediblər. Bir sözlə Əla !</p>           
           <div className="sekil-yazi">
            <img src={img5} alt=""/>
            <div className="yazi5">
                <h1>Fikret Qocayev</h1>
                <h4>Alici</h4>
            </div>
           </div>
            </div>
            <div className="slide">
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>Həqiqətəndə çox gözəl əl işləri var, Əhsən sizə. Evimi çox tez bir zamanda gözəl təmir ediblər. Bir sözlə Əla !</p>           
               <div className="sekil-yazi">
                <img src={img5} alt=""/>
                <div className="yazi5">
                    <h1>Fikret Qocayev</h1>
                    <h4>Alici</h4>
                </div>
               </div>
            </div>
            <div className="slide">
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>Həqiqətəndə çox gözəl əl işləri var, Əhsən sizə. Evimi çox tez bir zamanda gözəl təmir ediblər. Bir sözlə Əla !</p>           
               <div className="sekil-yazi">
                <img src={img5} alt=""/>
                <div className="yazi5">
                    <h1>Fikret Qocayev</h1>
                    <h4>Alici</h4>
                </div>
               </div>
            </div>
            <div className="slide">
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>Həqiqətəndə çox gözəl əl işləri var, Əhsən sizə. Evimi çox tez bir zamanda gözəl təmir ediblər. Bir sözlə Əla !</p>           
               <div className="sekil-yazi">
                <img src={img5} alt=""/>
                <div className="yazi5">
                    <h1>Fikret Qocayev</h1>
                    <h4>Alici</h4>
                </div>
               </div>
            </div>
            <div className="slide">
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>Həqiqətəndə çox gözəl əl işləri var, Əhsən sizə. Evimi çox tez bir zamanda gözəl təmir ediblər. Bir sözlə Əla !</p>           
               <div className="sekil-yazi">
                <img src={img5} alt=""/>
                <div className="yazi5">
                    <h1>Fikret Qocayev</h1>
                    <h4>Alici</h4>
                </div>
               </div>
            </div>
        </div>     
        <section className="position">
            <h2>Haqqımızda</h2>
            <div className="positions">
                <div className="position1">
                    <div className="poswrite">                   
                        <h1><i className="fa-solid fa-check-double"></i> Missiyamız</h1>
                        <p>Məqsədimiz portalımız vasitəsilə hər bir satıcının axtardığı müştəri, hər bir müştərini isə arzusunda olduğu məhsul ilə təmin etməkdir.</p>
                    </div>
                </div>
                <div className="position2">
                 <div className="poswrite">                    
                     <h1><i className="fa-solid fa-user-group"></i> Şirkətimiz</h1>
                     <p> Belə ki, saytımız müştəriyə ona ən yaxın satıcını və ən ucuz qiymət təklifini tapmağa imkan verir.</p>
                 </div>
                </div>
                   <div className="position3">
                    <div className="poswrite">
                        <h1><i className="fa-solid fa-check-double"></i> Gələcəyə baxış</h1>
                        <p>Saytımızın günü-gündən müştərilər üçün münasib seçim imkanı yaradan əvəzolunmaz bir vasitəyə çevriləcəyinə ümid edirik. </p>
                    </div>
                   </div>
            </div>
        </section>
   <section id="orta">
    <div className="orta1">
        <div className="label">
            <label for="">Ad</label>
            <input type="text" name="" id="" placeholder="Adınızı tam yazın"/>
        </div>
        <div className="label">
            <label for="">ePoçt</label>
            <input type="text" name="" id="" placeholder="Email adresi daxil edin"/>
        </div>
        <div className="label">
            <label for="">Mövzu</label>
            <input type="text" name="" id="" placeholder="Mövzunu daxil edin"/>
        </div>
        <div className="label1">
            <label for="">Mesaj</label>
        <textarea name="" id="" cols="30" rows="10" placeholder="Qeydləri daxil edin"></textarea>
    </div>        
    <button>Mesajı göndərin</button>
    </div>
    <div className="orta2">
        <img src={img6} alt=""/>
        <h3>Bizimlə əlaqə saxlayın</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum doloremque odio nostrum iure maxime accusamus asperiores natus porro quod molestias impedit laborum labore sit architecto aut ad, fugiat incidunt repellendus.</p>
        <div className="icon1">
            <div className="icon2">
                <i className="fa-solid fa-mobile-screen-button"></i>
            <div className="biryerde">
                <h4>Telefon nömrəsi:</h4>
                <p className="balaca">+994 50 671 74 23</p>
            </div>
            </div>
            <div className="icon2">
            <i className="fa-solid fa-envelope-open"></i>
            <div className="biryerde">
                <h4>ePoçt ünvanı:</h4>
                <p className="balaca">esmirafrcova@gmail.com</p>
            </div>
            </div>
            <div className="icon2">
                <i className="fa-solid fa-globe"></i>
            <div className="biryerde">
                <h4>Website:</h4>
                <p className="balaca">https://www.Constructor.com</p>
            </div>
            </div>
            <div className="icon2">
                <i aria-hidden="true" className="fas fa-map-marked-alt"></i>
            <div className="biryerde">
            <h4>Ünvan:</h4>
            <p className="balaca">Bakı şəhəri, Hövsan </p>
            </div>
            </div>
        </div>
        <div className="takib">
            <h1>Bizi izləyin</h1>
            <div className="takib1">
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-tiktok"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </div>
   </section>
   <section className="terefdaslar">
    <h1>TƏRƏFDAŞLAR</h1>
    <div className="terefdas">
        <div className="terefdas1 anim"><img src="/img/met1.jpg" alt=""/></div>
        <div className="terefdas1 anim"><img src="/img/met2.jpg" alt=""/></div>
        <div className="terefdas1 anim"><img src="/img/met3.jpg" alt=""/></div>
        <div className="terefdas1 anim"><img src="/img/met4.jpg" alt=""/></div>
        <div className="terefdas1 anim"><img src="/img/met5.jpg" alt=""/></div>
        <div className="terefdas1 anim"><img src="/img/met6.jpg" alt=""/></div>
    </div>
   </section>
    </>
  )
}

export default Home
