import PropTypes from 'prop-types';
import TableUpper from './TableUpper';
import TableLower from './TableLower';
const Cart = ({ cooks, handlePreparing, cooking }) => {

    return (
        <div>
            <h2 className="text-center pb-4 font-semibold text-2xl">Want to cook: {cooks.length}</h2>
            <div className="border-solid border-[1px] w-[70%] mx-auto mb-6"></div>
            {/* Table-Upper */}
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
                            cooks.map((cook, idx) => <TableUpper cook={cook} key={idx} idx={idx} handlePreparing={handlePreparing}></TableUpper>)
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
                        {
                            cooking.map((cook, idx) => <TableLower cook={cook} key={idx} idx={idx}></TableLower>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cooks: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired
}
export default Cart;
