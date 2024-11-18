import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TacheForm from './components/TacheForm';
import ListeTaches from './components/ListeTaches';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto p-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<TacheForm />} />
          <Route path="/liste" element={<ListeTaches />} />
        </Routes>
        <ListeTaches/>
      </div>
    </div>
  );
}
