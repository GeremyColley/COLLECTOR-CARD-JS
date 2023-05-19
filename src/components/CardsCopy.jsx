import movies from "../assets/movies.json";
import '../App.css'

const CardsCopy = () => {
    return (
        <div>
            {movies.map( (elem,index) => {
                return (
                    <section className="container">
                        <p className="title">{elem.category}</p>
                        <div className="movies-list">
                            {elem.images.map((image, num) => {
                                return <img key={num} src={image} alt="movie" />;
                            })}
                        </div>
                    </section>
                );
            })};
        </div>
    );
};

export default CardsCopy;