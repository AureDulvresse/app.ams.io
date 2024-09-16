import React, { useState } from "react";
import { Input } from "../ui/input";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { Search, Bell, MessageCircle, Moon, Sun, Trash2 } from "lucide-react";
import logo from "/logo.png"; // Logo de l'utilisateur
import schoolLogo from "/vite.svg"; // Logo de l'école
import { Button } from "../ui/button";
import Modal from "../common/Modal";
import { useTheme } from "../theme-provider";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<
    string | null
  >(null);

  // Exemple de données
  const [notifications, setNotifications] = useState([
    "Notification 1",
    "Notification 2",
    "Notification 3",
  ]);
  const [messages, setMessages] = useState([
    "Message 1",
    "Message 2",
    "Message 3",
  ]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsMessagesOpen(false); // Ferme les messages si ouverts
  };

  const toggleMessages = () => {
    setIsMessagesOpen(!isMessagesOpen);
    setIsNotificationsOpen(false); // Ferme les notifications si ouvertes
  };

  const closeAsides = () => {
    setIsNotificationsOpen(false);
    setIsMessagesOpen(false);
  };

  const handleDeleteNotification = (index: number) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  const handleDeleteMessage = (index: number) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const openNotificationDetails = (notification: string) => {
    setSelectedNotification(notification);
    setIsNotificationsOpen(false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div
        className={`bg-white dark:bg-slate-800 px-4 py-4 rounded-md shadow-md flex items-center justify-between transition-all`}
      >
        {/* Recherche */}
        <div className="w-96 h-10 relative">
          <Search
            className="absolute top-2.5 left-2 text-gray-400 dark:text-gray-500"
            fontSize={8}
          />
          <Input
            className="h-full w-full pl-10 pr-3 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-gray-100 dark:bg-gray-700"
            placeholder="Recherche"
          />
        </div>

        {/* Icônes de notifications et messagerie */}
        <div className="flex items-center space-x-6">
          {/* Icône Notifications */}
          <div
            className="relative cursor-pointer"
            onClick={toggleNotifications}
          >
            <Bell className="text-gray-500 dark:text-gray-300" size={24} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white dark:ring-gray-800"></span>
          </div>

          {/* Icône Messagerie */}
          <div className="relative cursor-pointer" onClick={toggleMessages}>
            <MessageCircle
              className="text-gray-500 dark:text-gray-300"
              size={24}
            />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-600 ring-2 ring-white dark:ring-gray-800"></span>
          </div>

          {/* Toggle du thème sombre */}
          <div className="cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="text-yellow-300" size={24} />
            ) : (
              <Moon className="text-gray-500 dark:text-gray-300" size={24} />
            )}
          </div>

          {/* Avatar Utilisateur avec logo de l'école derrière */}
          <div className="relative">
            {/* Avatar de l'école */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-slate-800 dark:border-white bg-white dark:bg-gray-800">
              <Avatar>
                <AvatarImage src={schoolLogo} alt="school-logo" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
            </div>

            {/* Avatar de l'utilisateur */}
            <div className="w-10 h-10 rounded-full border-2 border-teal-300 dark:border-teal-500">
              <Avatar>
                <AvatarImage src={logo} alt="profile" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(isNotificationsOpen || isMessagesOpen) && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={closeAsides}
        ></div>
      )}

      {/* Boîte de notifications */}
      {isNotificationsOpen && (
        <aside className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-2xl p-6 rounded-l-lg transition-transform transform translate-x-0 border-l-4 border-teal-500 dark:border-teal-400 z-50">
          <h2 className="text-lg font-fredoka font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Notifications
          </h2>
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="relative flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-teal-50 dark:hover:bg-teal-900 transition-all"
              >
                <span
                  className="text-gray-600 dark:text-gray-300 cursor-pointer"
                  onClick={() => openNotificationDetails(notification)}
                >
                  {notification}
                </span>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  onClick={() => handleDeleteNotification(index)}
                  title="supprimer"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Boîte de messagerie */}
      {isMessagesOpen && (
        <aside className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-2xl p-6 rounded-l-lg transition-transform transform translate-x-0 border-l-4 border-teal-500 dark:border-teal-400 z-50">
          <h2 className="text-lg font-fredoka font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Messages
          </h2>
          <ul className="space-y-4">
            {messages.map((message, index) => (
              <li
                key={index}
                className="relative flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-teal-50 dark:hover:bg-teal-900 transition-all"
              >
                <span className="text-gray-600 dark:text-gray-300 cursor-pointer">
                  {message}
                </span>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  onClick={() => handleDeleteMessage(index)}
                  title="supprimer"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Modal pour les notifications */}
      {selectedNotification && (
        <Modal
          isOpen={!!selectedNotification}
          onClose={() => setSelectedNotification(null)}
          title="Notification Details"
          description="Here are the details of the selected notification."
          content={<p>{selectedNotification}</p>}
          footer={
            <Button
              onClick={() => setSelectedNotification(null)}
              className="bg-teal-500 border-teal-400 hover:bg-teal-400"
            >
              Close
            </Button>
          }
        />
      )}
    </div>
  );
};

export default Navbar;
