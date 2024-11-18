import PropTypes from 'prop-types';

const Ingredients = ({ingredient}) => {
    return (
        <div>
            <li>{ingredient}</li>
        </div>
    );
};
Ingredients.propTypes = {
    ingredient: PropTypes.string.isRequired
}
export default Ingredients;