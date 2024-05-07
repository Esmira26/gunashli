import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import '../css/AddProducts.css'
import img1 from '../img/gunesli logo white-01 (1).png'


function AddProduct() {
    const [products , setProducts] = useState([]);
    const [place, setPlace] = useState(null);
    const [desc, setDesc] = useState(null);
    const [filed, setFiled] = useState(null);
    const [room, setRoom] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7039/api/Home').then(res =>{
          setProducts(res.data)
        })
      },[])

    const newProduct={
        "productPlace":place,
        "productDescription":desc,
        "productFiled":filed,
        "productRoom":room,
        "productPrice":price
    }

    function addProduct(a) {
        a.preventDefault();
        axios.post('https://localhost:7039/api/Home',newProduct).then(res=>{
            setProducts([...products,newProduct])
        }).catch((err=>{
            console.log(err);
        }))
    }
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
            <li><a href="">Layihələr</a></li>
            <li><a href="">Haqqımızda</a></li>
            <li><a href="#orta">Əlaqə</a></li>
            </ul>
        </div>
        </header>
        <section className='Add'>
            <h1>Məhsul əlavə et</h1>
            <div className="inputs">
                <div className="input1">
                    <label htmlFor="">Məkan</label>
                    <input type="text" placeholder='Məkanı qeyd edin' onChange={(a)=>setPlace(a.target.value)} value={place}/>
                </div>
                <div className="input1">
                    <label htmlFor="">Məlumat</label>
                    <input type="text" placeholder='Məkan haqqında məlumatı qeyd edin' onChange={(a)=>setDesc(a.target.value)} value={desc}/>
                </div>
                <div className="input1">
                    <label htmlFor="">Sahə</label>
                    <input type="text" placeholder='Məkanın ümumi sahəsini qeyd edin' onChange={(a)=>setFiled(a.target.value)} value={filed}/>
                </div>
                <div className="input1">
                    <label htmlFor="">Otaq</label>
                    <input type="text" placeholder='Otaq sayını qeyd edin' onChange={(a)=>setRoom(a.target.value)} value={room}/>
                </div>
                <div className="input1">
                    <label htmlFor="">Qiymət</label>
                    <input type="text" placeholder='Məkanın ümumi qiyməti'onChange={(a)=>setPrice(a.target.value)} value={price} />
                </div>
                <div className="input1">
                    <label htmlFor="">Şəkil</label>
                    <input type="file" placeholder='Şəkilləri seçin' />
                </div>
            <div className="picture">
                <div className="img1"></div>
                <div className="img1"></div>
                <div className="img1"></div>
            </div>
            </div>
            <button onClick={(a)=>addProduct(a)}>Əlavə et</button>
        </section>
    </>
  )
}

export default AddProduct