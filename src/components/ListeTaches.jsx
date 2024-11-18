import { useSelector, useDispatch } from 'react-redux';
import { supprimerTache, toggleTache } from '../actions/actionTache';

export default function ListeTaches() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto bg-black p-4 rounded-lg shadow-md">
      <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-900 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Libellé</th>
            <th className="py-3 px-6 text-left">Date de début</th>
            <th className="py-3 px-6 text-left">Date de fin</th>
            <th className="py-3 px-6 text-left">Statut</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 text-sm font-light">
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-700 hover:bg-blue-800 transition">
              <td className="py-3 px-6 text-left whitespace-nowrap">{task.libelle}</td>
              <td className="py-3 px-6 text-left">{task.dateDebut}</td>
              <td className="py-3 px-6 text-left">{task.dateFin}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.terminer}
                    onChange={() => dispatch(toggleTache(task.id))}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2">{task.terminer ? 'Oui' : 'Non'}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <button
                  onClick={() => dispatch(supprimerTache(task.id))}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs transition"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
