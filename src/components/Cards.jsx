import movies from "../assets/movies.json";
import Card from "./Card";
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll
// https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map


const Cards = () => {
    console.log(movies);
    return (
        <div>
            <h2>Coucou Alice</h2>
            {movies.map( (elem, index) => { return(
                <Card titre={elem.category} list={elem.images} key={index} />)
            })}
        </div>
    );
};

export default Cards;
