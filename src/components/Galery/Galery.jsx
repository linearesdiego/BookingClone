import React from 'react'
import "./Galery.css"
import buenosAires from '../../assets/buenosAires.jpg'
import mendoza from '../../assets/mendoza.jpg'
import bariloche from '../../assets/bariloche.jpg'
import españa from '../../assets/españa.jpg'
import salta from '../../assets/salta.jpg'
export const Galery = () => {
  return (
    <div className="Galery">
        <div className="GaleryContainer">
            <div className="cardItem item1">
                <img src={buenosAires} alt="" />
                <div className="infoCard">
                    <h1>Buenos Aires  </h1>
                </div>
            </div>
            <div className="cardItem item2">
                <img src={mendoza} alt="" />
                <div className="infoCard">
                    <h1>Mendoza </h1>
                </div>
            </div>
            <div className="cardItem item3">
                <img src={bariloche} alt="" />
                <div className="infoCard">
                    <h1>San Carlos de Bariloche </h1>
                </div>
            </div>
            <div className="cardItem item4">
                <img src={españa} alt="" />
                <div className="infoCard">
                    <h1>Madrid  </h1>
                </div>
            </div>
            <div className="cardItem item5">
                <img src={salta} alt="" />
                <div className="infoCard">
                    <h1>Salta </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
