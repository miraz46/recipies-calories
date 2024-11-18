

const TableLower = ({ cook, idx }) => {
    return (
        <tr>
            <td className="px-4 py-2">{idx + 1}</td>
            <td className="px-4 py-2">{cook.recipe_name}</td>
            <td className="px-4 py-2">{cook.preparing_time}</td>
            <td className="px-4 py-2">{cook.calories}</td>
        </tr>
    );
};

export default TableLower;