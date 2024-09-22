// PurchaseSubscription.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


interface SubscriptionPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: 10,
    features: ["1 utilisateur", "Support limité"],
  },
  {
    id: 2,
    name: "Pro",
    price: 20,
    features: ["5 utilisateurs", "Support premium"],
  },
  {
    id: 3,
    name: "Entreprise",
    price: 50,
    features: ["15 utilisateurs", "Support prioritaire"],
  },
];

const PurchaseSubscription: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (selectedPlan !== null) {
      // Logique pour l'achat (via API, paiement, etc.)
      navigate("/login"); // Redirection vers la page de connexion
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Choisir un plan d'abonnement</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`p-6 border rounded-lg ${
              selectedPlan === plan.id ? "border-indigo-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-2xl font-bold mb-4">${plan.price}/mois</p>
            <ul className="mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">
                  • {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={selectedPlan === plan.id ? "primary" : "secondary"}
              onClick={() => setSelectedPlan(plan.id)}
            >
              Sélectionner
            </Button>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Button
          className="bg-indigo-500 text-white"
          onClick={handlePurchase}
          disabled={selectedPlan === null}
        >
          Procéder au paiement
        </Button>
      </div>
    </div>
  );
};

export default PurchaseSubscription;
