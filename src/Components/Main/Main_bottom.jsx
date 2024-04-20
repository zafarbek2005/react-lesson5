import React from 'react'
import "./bootom.scss"
import bro from "../Main/img/bro.svg"


function Main_bottom() {
  return (
    <>
    
    <main id='ss' className='main Conteiner'>
    <div className="bro">
        <div className="g ">
            <h3>Stay home & get your daily
                needs from our shop</h3>
            <p>Start You'r Daily Shopping with Nest Mart</p>
            <input type="text" placeholder='          Your emaill address' />
            <button>Subscribe</button>

        </div>
        <div className="">
            <img src= {bro} alt="" />
        </div>
    </div>

    </main>
    
    </>

  )
}

export default Main_bottom