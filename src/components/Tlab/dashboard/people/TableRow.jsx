import PropTypes from 'prop-types';
const TableRow = ({ person }) => {
  const { ci, first_name, middle_name, surenames, tema_tesis, tutor } = person;

  return (
    <tr
      key={ci}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {surenames}
      </th>
      <td className="px-6 py-4">
        {first_name} {middle_name}
      </td>
      <td className="px-6 py-4">{ci}</td>
      <td className="px-6 py-4">{tutor}</td>
      <td className="px-6 py-4">{tema_tesis}</td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  person: PropTypes.object.isRequired
};
export default TableRow;
