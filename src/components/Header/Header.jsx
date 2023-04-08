import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import React, { useState } from 'react'
import "./Header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
export const Header = ({ type }) => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    }])
    const [openRoom, setOpenRoom] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prevState => {
            return {
                ...prevState,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    const handleOpenDate = () => {
        setOpenDate(!openDate)
        setOpenRoom(false)
    }
    const handleOpenRoom = () => {
        setOpenRoom(!openRoom)
        setOpenDate(false)

    }
    return (
        <div className='Header'>
            <div className={`${type !== 'list' ? 'HeaderContainer' : 'listMode'} `}>
                <div className="HeaderList">
                    <div className="HeaderListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="HeaderListItem active">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>

                    </div>
                    <div className="HeaderListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Cart Rentals</span>
                    </div>
                    <div className="HeaderListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="HeaderListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <div className={`${type !== 'list' ? '' : 'listNone'} `}>

                    <h1 className="headerTitle">
                        Find your next stay
                    </h1>
                    <p className="HeaderDesc">
                        Search deals on hotels, homes, and much more...</p>

                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className='headerIcon' />
                            <input
                                type="text"
                                placeholder='where are you going'
                                className='headerSearchInput'
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                            <span onClick={handleOpenDate} className='headerSearchText'>{format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}</span>
                            {
                                openDate &&
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                />
                            }

                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span onClick={handleOpenRoom} className='headerSearchText'>{options.adult} adults . {options.children} children . {options.room} room</span>
                            {openRoom &&

                                <div className="options">
                                    <div className="optionsItem">
                                        <span className='optionsTitle'>Adult</span>
                                        <div className="optionsCount">
                                            <button onClick={() => handleOption('adult', 'i')}>+</button>
                                            <span className='optionsNumber'>{options.adult}</span>
                                            <button disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>
                                        </div>

                                    </div>
                                    <div className="optionsItem">
                                        <span className='optionsTitle'>Children</span>
                                        <div className="optionsCount">
                                            <button

                                                onClick={() => handleOption('children', 'i')}>+</button>
                                            <span className='optionsNumber'>{options.children}</span>
                                            <button
                                                disabled={options.children <= 1}
                                                onClick={() => handleOption('children', 'd')}>-</button>
                                        </div>
                                    </div>
                                    <div className="optionsItem">
                                        <span className='optionsTitle'>Room</span>
                                        <div className="optionsCount">
                                            <button onClick={() => handleOption('room', 'i')}>+</button>
                                            <span className='optionsNumber'>{options.room}</span>
                                            <button
                                                disabled={options.room <= 1}
                                                onClick={() => handleOption('room', 'd')}>-</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="headerSearchItem">
                            <button className="btn_search" onClick={() => navigate('/hotel', { state: { options: options, date: date, input: input } })}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
