import { Link } from "react-router";

import PropTypes from "prop-types";
const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs">
            {
                categories.map(category =>
                    <Link key={category.id}
                        to= {`/category/${category.category}`}
                        role="tab" className="tab">
                        {category.category}
                    </Link>)
            }

        </div>
    );
};
Categories.propTypes = {
    categories: PropTypes.array
}
export default Categories;