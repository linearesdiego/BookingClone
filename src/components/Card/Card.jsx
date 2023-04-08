import React from 'react'
import card1 from "../../assets/card1.jpeg"
import card2 from "../../assets/card2.jpeg"
import './Card.css'
export const Card = () => {
    return (
        <div className="Card">
            <div className="CardContainer">
                <h1>Offers</h1>
                <p>Promotions, deals and special offers for you</p>
                <div className="cardBox">
                    <div className="CardItem">
                        <img src={card1} alt="card1" />
                        <div className="infoCard">
                            <h1>Escape for a while</h1>
                            <span>Enjoy the freedom of a monthly stay on Booking.com</span>
                            <button>Discover monthly stays</button>
                        </div>
                    </div>
                    <div className="CardItem">
                        <img src={card2} alt="card1" />
                        <div className="infoCard">
                            <h1>The great getaway, your way</h1>
                            <span>Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures</span>
                            <button>Find Getaway Dealss</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
