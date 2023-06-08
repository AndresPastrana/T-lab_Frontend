// TODO: Load the info of all the courts
// Nombre,
// Profesores por los que esta compuesto,

import { Link } from 'react-router-dom';
import Members from './Members';

// Estudiantes asigandos a este tribunal
const fakeData = [
  {
    id: 1,
    name: 'Ciencia y Tecinca',
    members: [
      {
        name: 'Elio Omar',
        cat: 'Ing',
        role: 'Presidente'
      },
      {
        name: 'Richar Fernandez',
        cat: 'Ing',
        role: 'Vocal'
      },
      {
        name: 'Dairelis',
        cat: 'Ing',
        role: 'Visita'
      }
    ]
  },
  {
    id: 2,
    name: 'Ciencia y Tecinca 2',
    members: [
      {
        name: 'Elio Omar s',
        cat: 'Ing',
        role: 'Presidente'
      },
      {
        name: 'Richar Fernandez dd',
        cat: 'Ing',
        role: 'Vocal'
      },
      {
        name: 'Daitelis dsd',
        cat: 'Ing',
        role: 'Visita'
      }
    ]
  }
];
const Courts = () => {
  return (
    <div>
      <h1>Courts </h1>

      {fakeData.map(({ id, name, members }) => {
        return (
          <div key={id} className="">
            <Link to={`${id}`} replace={true}>
              <h3 className="mb-2">{name}</h3>
              <Members members={members} />
              <hr className="my-8 text-red-600" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Courts;
