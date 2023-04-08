import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Nabvar } from '../../components/Nabvar/Nabvar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'

import "./ListHotel.css"
import result1 from "../../assets/result1.jpg"
import { faCalendar, faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons'
export const ListHotel = () => {
    const data = useLocation()

    const [input, setInput] = useState(data.state.input)
    const [date, setDate] = useState(data.state.date)
    const [options, setOptions] = useState(data.state.options)
    return (
        <>
            <Nabvar />
            <Header type='list' />
            <div className="listHotel">
                <div className="listContainer">
                    <div className="listSearch">
                        <h1>Search</h1>
                        <div className="listSearchText">
                            <label htmlFor="">Destination/property name:</label>
                            <input type="text" defaultValue={input} />
                            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                        </div>
                        <div className="listSearchText">
                            <label htmlFor="">Check-in date:</label>
                            <span>
                                {format(date[0].startDate, "MM/dd/yyyy")}
                            </span>
                            <FontAwesomeIcon className="icon" icon={faCalendar} />
                        </div>
                        <div className="listSearchText">
                            <label htmlFor="">Check-out date:</label>
                            <span>
                                {format(date[0].endDate, "MM/dd/yyyy")}
                            </span>
                            <FontAwesomeIcon className="icon" icon={faCalendar} />
                        </div>
                        <div className="listSearchText">
                            <label htmlFor="">1-night stay</label>
                            <span>
                                {options.adult} adult. {options.children} children. {options.room} room
                            </span>
                            <FontAwesomeIcon className="icon" icon={faPerson} />
                        </div>
                        <div className="searchButton">
                            <button className="btnSearch">Search</button>

                        </div>
                    </div>
                    <div className="listResult">
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                        <div className="ResultItem">
                            <img src={result1} alt="" />

                            <div className="infoResult">
                                <h1>Sheraton Salta HotelOpens</h1>
                                <span>500km from center</span>
                                <span className="infoGreen">Free airport taxi</span>
                                <strong>One-Bedroom Apartament</strong>
                                <span>Entire apartament. 1 bedroom . 1 living room</span>
                            </div>
                            <div className="infoSecond">
                                <div className="infoRating">
                                    <span className="InfoExcellent">Excellent</span>
                                    <span className="InfoNumber">8.2</span>
                                </div>
                                <div className="">
                                    <p className='PriceNumber'>129 $</p>
                                    <p className='taxi'>incluye taxis and frees</p>
                                    <button className="buttonSee">See availability</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
