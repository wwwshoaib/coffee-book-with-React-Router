
import PropTypes from 'prop-types';

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12 px-5 space-y-5">
            <h1 className="text-3xl text-gray-500">{title}</h1>
            <p className="text-md text-gray-500">{subtitle}</p>
            
        </div>
    );
}; 


Heading.propTypes = {
    title:PropTypes.any,
    subtitle:PropTypes.any
}

export default Heading;
