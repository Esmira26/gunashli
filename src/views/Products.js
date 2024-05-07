import React, {useEffect, useState} from 'react'
import Nav from '../components/Nav'
import '../css/Products.css'
import axios from 'axios'
import img1 from '../img/gunesli logo white-01 (1).png'
import Mehsul from '../components/Mehsul'

function Products() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('https://localhost:7039/api/Home').then(res=>{
            setProducts(res.data)
        })
    }, []);

    function delProduct(b) {
        axios.delete(`https://localhost:7039/api/Home/${b}`).then(res=>{
            setProducts(products.filter(c=>{return c.productId !== b}))
        }).catch((err=>{
            console.log(err);
        }))
    }    

    // function addCard(p) {
    //     console.log(p);
    // }

  return (
    <>
    <Nav/>
    <header>
        <hr/>
    <div className="ust">
        <div className="img">
            <img src={img1} alt=""/>
        </div>
        <ul>
            <li><a href="">Əsas səhifə</a></li>
            <li><a href="react1.html">Layihələr</a></li>
            <li><a href="">Haqqımızda</a></li>
            <li><a href="#orta">Əlaqə</a></li>
            </ul>
        </div>
        </header>
        <div className="qiymet">
            <div className="secim">
                <p>Otaq sayı</p>
                <div className="input">
                    <input type="text" name="" id="" placeholder="min"/>
                    <input type="text" name="" id="" placeholder="max"/>
                </div>
            </div>
            <div className="secim">
                <p>Sahə</p>
                <div className="input">
                    <input type="text" name="" id="" placeholder="min"/>
                    <input type="text" name="" id="" placeholder="max"/>
                </div>
            </div>
            <div className="secim">
                <p>Qiymət</p>
                <div className="input">
                    <input type="text" name="" id="" placeholder="min"/>
                    <input type="text" name="" id="" placeholder="max"/>
                </div>
            </div>
            <input type="text" placeholder="Axtar" className="input1"/>
        </div>
        <div className="elanlar">
            <h1>Elanlar</h1>
            <div className="elan1">
               {
                products.map(product=>{
                   return <Mehsul p={product} delProduct={delProduct} key={product.productId} />
                })
               }
                </div>
            </div>
        </>
  )
}

export default Products