import { Button } from "@/components/ui/button";
import { Calculator, Calendar, DollarSign, Percent } from "lucide-react";
import React, { useState } from "react";
import ChatBot from "./chatbot";

const EmiCalculator = () => {
  const [formData, setFormData] = useState({
    homePrice: 3000000,
    downPayment: 600000,
    interestRate: 3.5,
    loanTerm: 30,
  });
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateEmi = () => {
    const principal = formData.homePrice - formData.downPayment;
    const monthlyRate = formData.interestRate / 100 / 12;
    const numberOfPayment = formData.loanTerm * 12;

    const monthlyPayment =
      principal *
      ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayment)) /
        (Math.pow(1 + monthlyRate, numberOfPayment) - 1));

    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div className="container py-8">
      <ChatBot/>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Calculator className="h-8 w-8 mr-3 text-blue-600" />
          <h1 className="text-4xl font-bold">Mortgage Calculator</h1>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Home Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  value={formData.homePrice}
                  onChange={(e) =>
                    setFormData({ ...formData, homePrice: Number(e.target.value) })
                  }
                  className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  value={formData.interestRate}
                  onChange={(e) =>
                    setFormData({ ...formData, interestRate: Number(e.target.value) })
                  }
                  className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term (Years)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={formData.loanTerm}
                  onChange={(e) =>
                    setFormData({ ...formData, loanTerm: Number(e.target.value) })
                  }
                  className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button onClick={calculateEmi}>Calculate Monthly Payment</Button>
          </div>
          {monthlyPayment && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Monthly Payment Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">Principal & Interest</p>
                  <p className="text-2xl font-bold">${monthlyPayment.toFixed(2)}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">Total Loan Amount</p>
                  <p className="text-2xl font-bold">
                    ${(formData.homePrice - formData.downPayment).toLocaleString()}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">Down Payment</p>
                  <p className="text-2xl font-bold">
                    ${formData.downPayment.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Tips for Home Buyers</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <p className="text-gray-600">
                A higher down payment can significantly reduce your monthly payments and total interest paid.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <p className="text-gray-600">
                Consider shopping around for the best interest rates from different lenders.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <p className="text-gray-600">
                Don't forget to factor in additional costs like property taxes, insurance, and maintenance.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
