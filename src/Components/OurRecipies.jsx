import { GoClock } from "react-icons/go";
import { FaFire } from "react-icons/fa";

const OurRecipies = () => {
    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold mb-6">Our Recipes</h2>
                <p className="text-[#6b6b6b]">Explore Tantalizing Recipes, Delightful Techniques, and Unforgettable Culinary Adventures to Elevate Your Kitchen Skills <br /> and Impress Friends with Flavors That Dance on Their Taste Buds!</p>
            </div>
            <div className="p-6 w-[350px] border-solid border-2  justify-center items-center rounded-2xl">
                <img className="mb-6 rounded-xl mx-auto" src="https://i.ibb.co.com/T4QDxMz/Food-6.jpg" alt="" />
                <h2>Spaghetti Bolognese</h2>
                <p className="py-4 border-b-[1px] border-[#e9e9e9] w-fit">Classic Italian pasta dish with savory meat sauce.</p>
                <p className="my-4">Ingredients: 6</p>
                <ol className="text-[#6b6a6a] list-disc pl-6 m-0 pb-4 border-b-[1px] border-[#e9e9e9]">
                    <li>500g ground beef</li>
                    <li>1 onion, chopped</li>
                    <li>2 cloves garlic, minced</li>
                </ol>
                <div className="flex items-center gap-8 mt-2">
                    <div className="flex items-center gap-1">
                        <GoClock />
                        <p>600 calories</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaFire />
                        <p>600 calories</p>
                    </div>
                </div>
                <button className="btn mt-6 py-3 px-5 bg-[#0BE58A] text-black rounded-full font-medium text-lg">Explore Now</button>
            </div>

        </div>
    );
};

export default OurRecipies;