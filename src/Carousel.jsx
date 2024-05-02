import { useState, useEffect } from "react";
import { shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const Carousel = () => {
    const [people, setPeople] = useState(shortList);

    const prevSlide = () => {
        console.log("prevSlide");
    }
    const nextSlide = () => {
        console.log("nextSlide");
    }
    return (
        <section className="slider-container">
            {people.map((person) => {
                const { id, image, name, title, quote } = person;
                return (
                    <article key={id} className="slide">
                        <img src={image} alt={name} className="person-img"/>
                        <h4 className="name">{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon"/>
                    </article>
                );
            })}
            <button className="prev" onClick={() => prevSlide()}>
                <FaChevronLeft />
            </button>
            <button className="next" onClick={() => nextSlide()}>
                <FaChevronRight />
            </button>
        </section>
    )
}
export default Carousel;