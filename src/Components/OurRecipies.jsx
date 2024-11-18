import { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";


const OurRecipies = () => {
    const [recipies, setRecipies] = useState([])
    const [cooks, setCooks]=useState([])

    useEffect(() => {
        fetch("fakeData.json")
            .then((res) => res.json())
            .then((data) => setRecipies(data))
    }, [])

    const handleWantTOCook = (recipie) =>{
        
        const newCountRecipie = [...cooks, recipie];
        setCooks(newCountRecipie);
    }

    return (
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold mb-6">Our Recipes</h2>
                <p className="text-[#6b6b6b]">Explore Tantalizing Recipes, Delightful Techniques, and Unforgettable Culinary Adventures to Elevate Your Kitchen Skills <br /> and Impress Friends with Flavors That Dance on Their Taste Buds!</p>
            </div>
            <div className="flex gap-4 ">
                {/* Left Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 w-[60%]  gap-4 h-full">

                    {
                        recipies.map(recipie => <Card recipie={recipie} key={recipie.recipe_id} handleWantTOCook={handleWantTOCook}></Card>)
                    }
                </div>
                {/* Right Side */}
                <div className="p-6  border-solid border-2  justify-center items-center rounded-2xl w-[40%] h-fit">
                    <Cart cooks={cooks} key={cooks.recipe_id}></Cart>
                </div>
            </div>

        </div>
    );
};

export default OurRecipies;



