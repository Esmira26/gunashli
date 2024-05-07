import React from 'react'
import img1 from '../img/gunesli logo-01.png'

function Footer() {
  return (
    <footer>
    <div className="footerr">
        <div className="footer1">
            <div className="img">
                <img src={img1} alt=""/>
            </div>
            <p>Qısa zamanda sizə istədiyiniz və arzunuzda olan evi təmir edib, sizə təqdim edək. Hər zaman müştərilərimizin xidmətindəyik.</p>
            <div className="takib1">
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
        <div className="footer2">
            <h1 className="elaqe1">Göstərdiyimiz Xidmətlər</h1>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Tikinti</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Təmir</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Layihələndirmə</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>EKSTERYER dizayn</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>İNTERYER dizayn</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>LANDŞAFT dizayn</p>
            </div>
        </div>
        <div className="footer2">
            <h1 className="elaqe2">Dəstəyimiz</h1>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Xidmətlər</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Dizayn xidmətləri</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Haqqımızda</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Tez-tez verilən suallar</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Əlaqə</p>
            </div>
            <div className="check">
                <i className="fa-solid fa-check"></i>
                <p>Gizlilik siyasəti</p>
            </div>
        </div>
        <div className="footer3">
            <h1 className="elaqe3">Əlaqə Məlumatı</h1>
            <div className="telefon">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <div className="biryerde">
                    <p>Telefon nömrəsi:</p>
                    <p className="balaca">+994 50 671 74 23</p>
                </div>
            </div>
            <div className="telefon">
                <i aria-hidden="true" className="fas fa-envelope-open"></i>
                <div className="biryerde">
                    <p>ePoçt ünvanı:</p>
                    <p className="balaca">esmirafrcova@gmail.com</p>
                </div>
            </div>
            <div className="telefon">
                <i aria-hidden="true" className="fas fa-map-marked-alt"></i>
                <div className="biryerde">
                    <p>Ünvan:</p>
                    <p className="balaca">Bakı şəhəri, Hövsan </p>
                </div>
            </div>
        </div>
    </div>
    <h5>© Gunashli Inshaat 2024. Müəllif hüquqları qorunur</h5>
   </footer>
  )
}

export default Footer