
const Card = ({titre, list}) => {
    return (
        <section className="container">
            <p className="title">{titre}</p>
            <div className="movies-list">
                {list.map((image, num) => {
                    return <img key={num} src={image} alt="movie" />;
                })}
            </div>
        </section>
    );
};

export default Card;
