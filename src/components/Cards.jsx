import movies from "../assets/movies.json";

const Cards = () => {
    return (
        <div>
            {movies.map( (elem,index) => {
                return (
                    <section>
                        <h2>{elem.category}</h2>
                        <div className="images-container">
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

export default Cards;