

const Cart = () => {
    return (

        <div >
            <h2 className="text-center pb-4 font-semibold text-2xl">Want to cook: 01</h2>
            <div className="border-solid border-[1px] w-[70%] mx-auto mb-6"></div>
            {/* Table-Upper */}
            <div className="p-4 bg-gray-100 rounded-2xl text-[#505050] mb-8">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="  px-4 py-2">Name</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Chicken Caesar Salad</td>
                            <td className="px-4 py-2">20 minutes</td>
                            <td className="px-4 py-2">400 calories</td>
                            <td className="px-4 py-2"><button className="btn py-3 px-5 bg-[#0BE58A] text-black rounded-full">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-center pb-4 font-semibold text-2xl">Currently cooking: 02</h2>
            <div className="border-solid border-[1px] w-[70%] mx-auto mb-6"></div>
            {/* Table-Lower */}
            <div className="p-4 bg-gray-100 rounded-2xl text-[#505050] mb-8">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2"></th> 
                            <th className="  px-4 py-2">Name</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">1</td> {/* Extra column content */}
                            <td className="px-4 py-2">Chicken Caesar Salad</td>
                            <td className="px-4 py-2">20 minutes</td>
                            <td className="px-4 py-2">400 calories</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Cart;