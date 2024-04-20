import React , {useEffect,useState} from 'react'
import "../Main/Cards.scss"
import { SlBasket } from "react-icons/sl";
import star from "../Main/img/star.svg"
import axios from 'axios';

const Api_url = "https://dummyjson.com/products"
function Main_cards() {
    const [data,setdata ] = useState([])
    useEffect(() =>{
        axios 
          .get(Api_url)
          .then((response) =>setdata(response.data.products))
          .catch((error) => console.log(error))
          .finally(() => console.log("finally"))
    })
    let cards = data?.slice(0,10).map((e) =>(
        <div key={e.id} className="wrapper-card">
        <img src= {e.thumbnail} alt="" />
        <p>{e.category}</p>
        <h3>{e.brand}</h3>
        <div className="star">
            <span><img src= {star} alt="" /></span>
            <span>(4.0)</span>
        </div>
        <div className="by-nest">
            <span>By </span>
            <span id='s2'>NestFood </span>
        </div>
        <div className="reyting">
          <div>
          <span>${e.price}</span>
            <span id='s3'> ${e.stock}</span>
          </div>
          <div>
          <button>
                <span><SlBasket /></span>  
                <span>Add</span>
            </button>
          </div>
        </div>
    </div>
    ))
  return (
    <>
    <main className='main Conteiner'>
        <div className="cards">
            <div className="card">
                <p>Everyday Fresh & Clean with Our Products</p>
                <button>Shop Now</button>
            </div>
            <div className="card1">
                <p>Everyday Fresh & Clean with Our Products</p>
                <button>Shop Now</button>
            </div>
            <div className="card2">
                <p>Everyday Fresh & Clean with Our Products</p>
                <button>Shop Now</button>
            </div>

            <div className="pop">
                <div className="pop1">
                    <h3>Popular Products</h3>
                </div>
                <div className="pop2">
                    <p>All</p>
                    <p>Milks & Dairies</p>
                    <p>Coffes & Teas</p>
                    <p>Pet Foods</p>
                    <p>Meats</p>
                    <p>Vegetables</p>
                    <p>Fruits</p>
                </div>
            </div>
        </div>


        <div className="Wrappers">
            {cards}
        </div>

    </main>

    </>
  )
}

export default Main_cards