import React from "react";

const StudentDetail : React.FC = () => {
  // Exemple de données d'un étudiant
  const student = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Étudiant en informatique passionné par le développement web et les nouvelles technologies.",
    recentActivity: [
      "A rejoint le groupe de projet JavaScript",
      "A soumis l'exercice de mathématiques",
      "A participé à la conférence sur l'IA",
    ],
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+33 1 23 45 67 89",
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      {/* Header section */}
      <div className="flex items-center">
        <img
          src={student.profilePicture}
          alt={`${student.name} Profile`}
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{student.bio}</p>
        </div>
      </div>

      {/* Main content section */}
      <div className="mt-6">
        {/* Recent Activity */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Activité Récente</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {student.recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Informations de Contact
          </h2>
          <p>
            <strong>Email :</strong> {student.contactInfo.email}
          </p>
          <p>
            <strong>Téléphone :</strong> {student.contactInfo.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
