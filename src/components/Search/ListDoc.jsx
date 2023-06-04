/* eslint-disable react/prop-types */
import Doc from './Doc';

const ListDoc = ({ listOfDocs }) => {
  return (
    <div>
      {listOfDocs.map((d) => {
        const { a, b, c } = d;
        console.log(a, b, c);
        <Doc />;
      })}
    </div>
  );
};

export default ListDoc;
