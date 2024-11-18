import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterTache } from '../actions/actionTache';

export default function TacheForm() {
  const [newTask, setNewTask] = useState({
    libelle: '',
    dateDebut: '',
    dateFin: ''
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.libelle && newTask.dateDebut && newTask.dateFin) {
      dispatch(
        ajouterTache({
          id: Date.now(),
          ...newTask,
          terminer: false
        })
      );
      setNewTask({ libelle: '', dateDebut: '', dateFin: '' });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black text-gray-300 shadow-lg rounded-lg p-8 mb-6">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Ajouter une nouvelle tâche</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="libelle" className="block text-sm font-medium mb-2">
            Libellé de la tâche
          </label>
          <input
            type="text"
            id="libelle"
            name="libelle"
            value={newTask.libelle}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            placeholder="Entrez le libellé"
            required
          />
        </div>
        <div>
          <label htmlFor="dateDebut" className="block text-sm font-medium mb-2">
            Date de début
          </label>
          <input
            type="date"
            id="dateDebut"
            name="dateDebut"
            value={newTask.dateDebut}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="dateFin" className="block text-sm font-medium mb-2">
            Date de fin
          </label>
          <input
            type="date"
            id="dateFin"
            name="dateFin"
            value={newTask.dateFin}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Ajouter la tâche
        </button>
      </form>
    </div>
  );
}
