import React from 'react'
import "../Main/hero.scss"
import Aple from "../Main/img/99pi1q1o_-iphone-15-pro-max-small_625x300_13_September_23-removebg-preview.png"
function Main_hero() {
  return (

    <>
    <main>
    <div className="main-hero Conteiner">
        <div className="best-way">
            <div className="l">
                <span>100%</span>
                <p> Organic Vegetables</p>
            </div>
        
            <div className="h33">
            <h3>The best way to <br />stuff your wallet.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
reiciendis beatae consequuntur.</p>
            </div>

            <div className="input">
                <input type='search' placeholder='     Your emaill address' />
                <button>Subscribe</button>
            </div>
        </div>

        <div className="btns">
            <button> x  Shopping</button>
            <button id='re'> x  Recips</button>
            <button> x  Kitchen</button>
            <button> x  News</button>
            <button> x  Food</button>
        </div>

        <div className="img">
            <img src= {Aple} alt="aple" />
        </div>
    </div>
    </main>
    
    </>
  )
}

export default Main_hero