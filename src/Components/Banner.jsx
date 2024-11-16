const Banner = () => {
    return (
        <div className="flex justify-center">
            <div className="relative">
                <img src="https://i.ibb.co.com/gjFktQk/banner-img.png" alt="" />
                <div className="text-white w-full" style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                }}>
                    <h2 className="font-bold text-5xl tracking-wide leading-snug">Discover an exceptional cooking <br /> class tailored for you!</h2>
                    <p className="my-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex justify-center gap-6">
                        <button className="btn py-5 px-8 bg-[#0BE58A] text-black rounded-full font-semibold text-xl">Explore Now</button>
                        <button className="btn rounded-full py-5 px-8 border-solid border-[1px] text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;