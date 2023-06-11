// Should recive a list to render
import PropTypes from 'prop-types';
import { memo } from 'react';
import TableRow from './TableRow';

// SOLID: JUst render the list
const Table = ({ people }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto   max-h-[80vh] md:max-h-[90vh]">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="sticky text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              Surenames
            </th>
            <th scope="col" className="px-6 py-4">
              First/Second name
            </th>
            <th scope="col" className="px-6 py-4">
              CI
            </th>

            <th scope="col" className="px-6 py-4">
              Tutor
            </th>
            <th scope="col" className="px-6 py-4">
              Tema tesis
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        {/*TODO: Load the table body dinamically */}
        <tbody>
          {people.map((person) => (
            <TableRow key={person.ci} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default memo(Table);
