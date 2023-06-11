export const matchString = (queryFilter, person) => {
  const { first_name, middle_name, surenames, role } = person;
  const { searchParam, type } = queryFilter;
  const regEx = new RegExp(searchParam, 'i');
  if (
    role === type &&
    (regEx.test(first_name) || regEx.test(middle_name) || regEx.test(surenames.trim()))
  )
    return true;

  //TODO: si el param es vacio devolver todos los que sean de un tipo
};
