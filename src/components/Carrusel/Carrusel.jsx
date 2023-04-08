import "./Carrusel.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider1 from "../../assets/slider/silder1.jpg"
import slider2 from "../../assets/slider/slider2.jpg"
import slider3 from "../../assets/slider/slider3.jpg"
import slider4 from "../../assets/slider/slider4.jpg"
import slider5 from "../../assets/slider/slider5.jpg"
import slider6 from "../../assets/slider/slider7.jpg"
import slider7 from "../../assets/slider/slider8.jpg"
import slider8 from "../../assets/slider/slider9.jpg"
import slider9 from "../../assets/slider/slider10.jpg"
import slider10 from "../../assets/slider/slider11.jpg"

const data = [
    {
        id: 1,
        img: slider1,
        title:'Buenos Aires',
        des: '5,126 properties'
    },
    {
        id: 2,
        img: slider2,
        title:'San Carlos de Bariloche',
        des: '998 properties'
    },
    {
        id: 3,
        img: slider3,
        title:'Mar de Plata',
        des: '1,663 properties'
    },
    {
        id: 4,
        img: slider4,
        title:'Mendoza',
        des: '946 properties'
    },
    {
        id: 5,
        img: slider5,
        title:'Puerto iguazú',
        des: '515 properties'
    },
    {
        id: 6,
        img: slider6,
        title:'Cordoba',
        des: '1,352 properties'
    },
    {
        id: 7,
        img: slider7,
        title:'Salta',
        des: '1,030 properties'
    },
    {
        id: 8,
        img: slider8,
        title:'Villa Carlos Paz',

        des: '851 properties'
    },
    {
        id: 9,
        img: slider9,
        title:'Tandil',
        des: '434 properties'
    },
    {
        id: 10,
        img: slider10,
        title:'Villa General Belgrano', 
        des: '211 properties'
    },
]
export const Carrusel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="carrusel">
            <div className="carruselContainer">
                <h1>Explore Argentina</h1>
                <p>These popular destinations have a lot to offer</p>
                <Carousel responsive={responsive}>
                    {data.map(item => (
                        <div key={item.id} className="slider">
                            <img src={item.img} alt="" />
                            <h2>{item.title}</h2>
                            <span>{item.des}</span>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
