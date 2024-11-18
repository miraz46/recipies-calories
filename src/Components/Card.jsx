import { GoClock } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';
import Ingredients from "./Ingredients";

const Card = ({ recipie, handleWantTOCook }) => {
    const {  recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipie;
    return (

        <div >
            {/* Card-1 */}
            <div className="p-6  border-solid border-2  justify-center items-center rounded-2xl h-full">
                <img className="mb-6 rounded-xl mx-auto h-[250px] w-full" src={recipe_image} alt="" />
                <h2 className="text-xl font-semibold">{recipe_name}</h2>
                <p className="py-4 border-b-[1px] border-[#e9e9e9] w-fit text-[#6b6a6a]">{short_description}</p>
                <p className="my-4 text-lg font-medium">Ingredients: {ingredients.length}</p>
                <ol className="text-[#6b6a6a] list-disc pl-6 m-0 pb-4 border-b-[1px] border-[#e9e9e9]">
                    {
                        ingredients.map((ingredient, idx) => <Ingredients ingredient={ingredient} key={idx}></Ingredients>)
                    }
                    
                </ol>
                <div className="flex items-center gap-8 mt-2">
                    <div className="flex items-center gap-1">
                        <GoClock />
                        <p className="text-[#6b6a6a]">{preparing_time}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaFire />
                        <p className="text-[#6b6a6a]">{calories}</p>
                    </div>
                </div>
                <button onClick={() => handleWantTOCook(recipie)} className="btn mt-6 py-3 px-5 bg-[#0BE58A] text-black rounded-full font-medium text-lg">Want to Cook</button>
            </div>

        </div>

    );
};
Card.propTypes = {
    recipie: PropTypes.object.isRequired,
    handleWantTOCook: PropTypes.func.isRequired
}
export default Card;