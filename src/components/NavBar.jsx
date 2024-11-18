import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center mb-6 bg-black p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">Gestionnaire de Tâches</h1>
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="/" 
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            Ajouter une tâche
          </Link>
        </li>
        <li>
          <Link 
            to="/liste" 
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            Liste des tâches
          </Link>
        </li>
      </ul>
    </nav>
  );
}
