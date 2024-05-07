import React, { useState, useEffect } from 'react';
import '../css/Sebet.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import img1 from '../img/gunesli logo white-01 (1).png';
import SebetMehsul from '../components/SebetMehsul';

function Sebet() {
  const [sebet, setSebet] = useState([]);

  useEffect(() => {
      axios.get('https://localhost:7039/api/Basket')
          .then(res => {
              setSebet(res.data);
          })
          .catch(error => {
              console.error('Sebet yükleme hatası:', error);
          });
  }, []);

  function addSebet(p) {
      const newSebet = {
          "sebetPlace": p.productFiled,
          "sebetFiled": p.productFiled,
          "sebetRoom": p.productRoom,
          "sebetPrice": p.productPrice,
          "sebetImg": p.productImg
      };

      axios.post('https://localhost:7039/api/Basket', newSebet)
          .then(res => {
              setSebet(prevSebet => [...prevSebet, newSebet]);
          })
          .catch(error => {
              console.error('Sebet ekleme hatası:', error);
          });
  }
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
            <section className="sebet">
                <h1>Səbət</h1>
                <div className="sebett">
                    <div className="sebet1">
                        {
                            sebet.map(card => {
                                return <SebetMehsul c={card} key={card.sebetId} />;
                            })
                        }
                    </div>
                    <div className="hr"></div>
                    <div className="sebet2">
                        <h4>Səbətin tutumu</h4>
                        <hr />
                        <h2>Sahə : <span>70kv</span></h2>
                        <h6>Otaq sayı : <span>6</span></h6>
                        <p className="s2">Qiymət : <span>35000₼</span></p>
                        <button><a href="">Sifarişinizi göndərin</a></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sebet;
