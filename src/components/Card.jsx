import PropTypes from "prop-types";




const Card = ({ coffee }) => {
    const { name, image, category, description, rating, popularity } = coffee;
    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src= {image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-justify">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <h2 className="text-xl font-semibold"> {category}</h2>
                    <p>{description}</p>
                    <p>Rating: {rating} </p>
                    <p>Popularity: {popularity} </p>
                 
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
Card.propTypes = {
    coffee: PropTypes.object
}
export default Card;