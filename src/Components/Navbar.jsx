const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
            <img src="https://i.ibb.co.com/Lpg6m88/logo.png" alt="" />
            </div>
            <div className="grid grid-cols-4 gap-12">
                <p><a href="">Home</a></p>
                <p><a href="">Recipes</a></p>
                <p><a href="">About</a></p>
                <p><a href="">Search</a></p>
            </div>
            <div className="flex gap-4">
                <input type="text" placeholder="Search..." className="border-solid border-2 rounded-full p-1 bg-[#ebebeb] text-black"/>
                <img className="bg-[#0BE58A] rounded-full p-2" src="https://i.ibb.co.com/9tp0Pf0/head.png" alt="" />
            </div>

        </div>

    );
};

export default Navbar;