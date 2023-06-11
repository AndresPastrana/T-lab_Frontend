import PropTypes from 'prop-types';
const FilterButton = ({ handleOnTypeChange, typesOfPeople }) => {
  return (
    <div className=" mt-3 md:mt-0 mr-auto sm:mb-0 order-2 md:order-1">
      <button
        id="dropdownRadioButton"
        data-dropdown-toggle="dropdownRadio"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button">
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"></path>
        </svg>
        Type
        <svg
          className="w-3 h-3 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {/* Dropdown menu  */}
      <div
        id="dropdownRadio"
        className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="top"
        style={{
          position: 'absolute',
          inset: 'auto auto 0px 0px',
          margin: 0
          // eslint-disable-next-line no-undef
          //   transhtmlForm: translate3d(522.5, 3847.5, 0)
        }}>
        <ul
          className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownRadioButton">
          {/*Generate the filter for all the allow users  */}
          {Object.values(typesOfPeople).map((type, index) => (
            <li key={index}>
              <div className="flex items-center p-2 pl-8 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  defaultChecked={type === 'student' ?? true}
                  onChange={handleOnTypeChange}
                  id="filter-radio-example-1"
                  type="radio"
                  value={type}
                  name="filter-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="filter-radio-example-1"
                  className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                  {type.toUpperCase()}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FilterButton.propTypes = {
  handleOnTypeChange: PropTypes.func.isRequired,
  typesOfPeople: PropTypes.object.isRequired
};

export default FilterButton;
