/* eslint-disable react/prop-types */
const Doc = ({ docData }) => {
  return (
    <div>
      <h2>{JSON.stringify(docData)}</h2>
      <img src="" alt="" />

      <li>
        <div>Cant Downloads</div>
      </li>
      <li>
        <div>Preview</div>
        <div>Dowloand</div>
      </li>
    </div>
  );
};

export default Doc;
