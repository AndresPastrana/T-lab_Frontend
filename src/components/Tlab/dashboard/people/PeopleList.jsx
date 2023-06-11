import { useMemo, useState } from 'react';
import { matchString } from '../../../../helpers/forms';
import FilterButton from './FilterButon';
import SearchBar from './SearchBar';
import Table from './Table';

const PeopleList = () => {
  const typesOfPeople = { students: 'student', profesors: 'profesor' };
  //  TODO: Load the list of people
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState([
    {
      ci: '001208622456',
      first_name: 'Andres',
      middle_name: 'Ernesto',
      surenames: 'Luis Pastrana',
      tutor: 'Richard',
      tema_tesis: 'SG de vacas del combinado',
      role: 'student'
    },
    {
      ci: '001208622457',
      first_name: 'Andres',
      middle_name: 'Ernesto',
      surenames: 'Luis Pastrana',
      tutor: 'Richard',
      tema_tesis: 'SG de vacas del combinado',
      role: 'student'
    },
    {
      ci: '001208622458',
      first_name: 'Ricardo',
      middle_name: 'Ernesto',
      surenames: 'Luis Pastrana',
      tutor: 'Richard',
      tema_tesis: 'SG de vacas del combinado',
      role: 'profesor'
    },
    {
      ci: '001208622459',
      first_name: 'Andres',
      middle_name: 'Ernesto',
      surenames: 'Luis Pastrana',
      tutor: 'Richard',
      tema_tesis: 'SG de vacas del combinado',
      role: 'student'
    },
    {
      ci: '0012086224523',
      first_name: 'Elio',
      middle_name: 'Omar',
      surenames: 'Luis Pastrana',
      tutor: 'Richard',
      tema_tesis: 'SG de vacas del combinado',
      role: 'profesor'
    },
    {
      ci: '0012086224543',
      first_name: 'Andres',
      middle_name: 'Ernesto',
      surenames: 'Luis Pastrana',
      tutor: 'Richard',
      tema_tesis: 'SG de vacas del combinado',
      role: 'student'
    }
  ]);

  const [queryFilter, setqueryFilter] = useState({
    type: typesOfPeople.students,
    searchParam: ''
  });

  const { searchParam } = queryFilter;

  const filterdList = useMemo(() => {
    return people.filter((person) => matchString(queryFilter, person));
  }, [queryFilter, people]);

  const handleFormChange = (e) => {
    const { value } = e.target;
    setqueryFilter((prev) => {
      return { ...prev, searchParam: value };
    });
  };
  const handleOnTypeChange = (e) => {
    const { value } = e.target;

    setqueryFilter((prev) => {
      return { ...prev, ['type']: value };
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between pb-4">
        {/* Filter content button */}
        <FilterButton handleOnTypeChange={handleOnTypeChange} typesOfPeople={typesOfPeople} />
        {/* Seach Bar */}
        <SearchBar searchParam={searchParam} handleFormChange={handleFormChange} />
      </div>
      <Table people={filterdList} />
    </div>
  );
};

export default PeopleList;
