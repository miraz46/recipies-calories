import PropTypes from 'prop-types';
import TableUpper from './TableUpper';
const Cart = ({ cooks }) => {

    return (
        <div>
            <h2 className="text-center pb-4 font-semibold text-2xl">Want to cook: {cooks.length}</h2>
            <div className="border-solid border-[1px] w-[70%] mx-auto mb-6"></div>
            <div className="p-4 bg-gray-100 rounded-2xl text-[#505050] mb-8">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Calories</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cooks.map((cook, idx) =><TableUpper cook={cook} key={idx} idx={idx}></TableUpper>)
                        }
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
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Spaghetti Bolognese</td>
                            <td className="px-4 py-2">30 minutes</td>
                            <td className="px-4 py-2">500 calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cooks: PropTypes.array.isRequired
}
export default Cart;
