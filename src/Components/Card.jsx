import { GoClock } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';

const Card = ({recipie}) => {
    console.log(recipie)
    return (

        <div >
            {/* Card-1 */}
            <div className="p-6  border-solid border-2  justify-center items-center rounded-2xl">
                <img className="mb-6 rounded-xl mx-auto" src="https://i.ibb.co.com/T4QDxMz/Food-6.jpg" alt="" />
                <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                <p className="py-4 border-b-[1px] border-[#e9e9e9] w-fit text-[#6b6a6a]">Classic Italian pasta dish with savory meat sauce.</p>
                <p className="my-4 text-lg font-medium">Ingredients: 6</p>
                <ol className="text-[#6b6a6a] list-disc pl-6 m-0 pb-4 border-b-[1px] border-[#e9e9e9]">
                    <li>500g ground beef</li>
                    <li>1 onion, chopped</li>
                    <li>2 cloves garlic, minced</li>
                </ol>
                <div className="flex items-center gap-8 mt-2">
                    <div className="flex items-center gap-1">
                        <GoClock />
                        <p className="text-[#6b6a6a]">30 minutes</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaFire />
                        <p className="text-[#6b6a6a]">600 calories</p>
                    </div>
                </div>
                <button className="btn mt-6 py-3 px-5 bg-[#0BE58A] text-black rounded-full font-medium text-lg">Want to Cook</button>
            </div>

        </div>

    );
};
Card.propTypes ={
    recipie : PropTypes.object.isRequired
}
export default Card;