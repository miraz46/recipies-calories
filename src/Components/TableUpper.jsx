

const TableUpper = ({ cook, idx }) => {
    console.log(idx)

    return (
        <tr>
            <td className="px-4 py-2">{idx + 1}</td>
            <td className="px-4 py-2">{cook.recipe_name}</td>
            <td className="px-4 py-2">{cook.preparing_time}</td>
            <td className="px-4 py-2">{cook.calories}</td>
            <td className="px-4 py-2">
                <button className="py-2 px-4 bg-[#0BE58A] text-black rounded-full">Preparing</button>
            </td>
        </tr>

    );
};

export default TableUpper;