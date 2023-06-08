// import PropTypes from 'prop-types';
const Members = ({ members = [] }) => {
  return (
    <>
      {members.map((member) => (
        <Member key={member.name} member={member} />
      ))}
    </>
  );
};

const Member = ({ member }) => {
  const { name, role } = member;
  return (
    <>
      <p>{name}</p>
      <span className="px-0 bg-gray-100 rounded-lg text-gray-500 font-medium  py-0.4">{role}</span>
    </>
  );
};

export default Members;
