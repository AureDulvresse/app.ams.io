import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage : React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-6xl font-bold font-fredoka">404</h1>
      <p className="text-2xl mt-4 font-inter">Page non trouvée</p>
      <p className="text-lg mt-2 font-inter">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-md">
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
