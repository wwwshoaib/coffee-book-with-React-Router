import PropTypes from "prop-types";




const Card = ( {coffee}) => {
    const {name, image} = coffee;
    return (
        <div>
            <h1>{name}</h1>
            <img src= {image} alt="" />
            
        </div>
    );
};
Card.propTypes = {
    coffee:PropTypes.object
}
export default Card;