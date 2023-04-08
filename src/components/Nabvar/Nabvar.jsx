import { useNavigate } from "react-router-dom"
import "./nabvar.css"


export const Nabvar = () => {
  const navigate = useNavigate()
  return (
    <div className="Nabvar">
        <div className="NabvarContainer">
            <span className="Nabvar_Logo" onClick={()=> navigate('/')}>Booking.com</span>
        <div className="Nabvar_Button">
            <button className='Nabvar_itemButton'>Register</button>
            <button className='Nabvar_itemButton'>Login</button>
        </div>
        </div>
    </div>
  )
}
