import React, { useState } from "react";
// import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-emerald-900">
          Plans and Pricing
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Receive unlimited credits when you pay yearly, and save on your plan.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                billing === "monthly"
                  ? "bg-emerald-900 text-white"
                  : "bg-white border"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                billing === "annual"
                  ? "bg-emerald-900 text-white"
                  : "bg-white border"
              }`}
            >
              Annual <span className="ml-1 text-emerald-500">Save 25%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Freemium</h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">&#8358;0</p>
            <p className="text-sm text-gray-500">
              Per user/month, billed annually
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600 text-left">
              <li>✓ Free download</li>
              <li>✓ Unlimited Customer support</li>
              <li>✓ 1 Cover letter per day</li>
              <li>✓ Limited Resume Templates</li>
              <li>✓ Limited access to our site features</li>
              <li>✓ Free forever</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-emerald-900 text-white cursor-pointer rounded-md">
              Get started for free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="text-white rounded-2xl bg-emerald-900 shadow p-6 border-2 border-emerald-500">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Premium</h3>
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                Popular
              </span>
            </div>
            <p className="mt-4 text-4xl font-bold text-emerald-500">
              &#8358; {billing === "monthly" ? "1,500" : "13,500"}
            </p>
            <p className="text-sm text-white">
              Per user/month, billed annually
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white text-left">
              <li>✓ AI Powered Resume Generations</li>
              <li>✓ Unlimited Cover letters</li>
              <li>✓ Unlimited Resume Templates</li>
              <li>✓ Unlimited Customer support</li>
              <li>✓ Have complete access to all our site features</li>
              <li>✓ Additional Resume Sections</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-emerald-500 text-white cursor-pointer rounded-md">
              Get started with Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
