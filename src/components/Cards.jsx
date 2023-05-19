import movies from "../assets/movies.json";
import Card from "./Card";

const Cards = () => {
    console.log(movies);
    return (
        <div>
            <h2>Coucou Alice</h2>
            {movies.map( (elem) => { return(
                <Card titre={elem.category} list={elem.images} />)
            })}
        </div>
    );
};

export default Cards;