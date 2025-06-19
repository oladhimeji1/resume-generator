import React, { useState } from 'react';
// import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function PricingPage() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-emerald-900">Plans and Pricing</h2>
        <p className="mt-2 text-lg text-gray-600">
          Receive unlimited credits when you pay yearly, and save on your plan.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="mt-6 flex justify-center space-x-4">
  <button
    onClick={() => setBilling('monthly')}
    className={`px-4 py-2 text-sm font-medium rounded-md ${
      billing === 'monthly' ? 'bg-emerald-900 text-white' : 'bg-white border'
    }`}
  >
    Monthly
  </button>
  <button
    onClick={() => setBilling('annual')}
    className={`px-4 py-2 text-sm font-medium rounded-md ${
      billing === 'annual' ? 'bg-emerald-900 text-white' : 'bg-white border'
    }`}
  >
    Annual <span className="ml-1 text-emerald-500">Save 25%</span>
  </button>
</div>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Free</h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">&#8358;0</p>
            <p className="text-sm text-gray-500">Per user/month, billed annually</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600 text-left">
              <li>✓ Free download</li>
              <li>✓ PDF format</li>
              <li>✓ Color, fonts edit</li>
              <li>✓ Unlimited downloads</li>
              <li>✓ Free forever</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-emerald-900 text-white rounded-md">Get started for free</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow p-6 border-2 border-emerald-500">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-emerald-900">Pro</h3>
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded">Popular</span>
            </div>
            <p className="mt-4 text-4xl font-bold text-emerald-900">&#8358;85</p>
            <p className="text-sm text-gray-500">Per user/month, billed annually</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600 text-left">
              <li>✓ Unlimited phone calls</li>
              <li>✓ 30-second checks</li>
              <li>✓ Single-user account</li>
              <li>✓ 20 monitors</li>
              <li>✓ Up to 6 seats</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-emerald-500 text-white rounded-md">Get started with Pro</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-emerald-900 text-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="mt-4 text-3xl font-bold">Custom</p>
            <p className="text-sm text-gray-300">Per subscription, billed annually</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-300 text-left">
              <li>✓ Everything in Pro</li>
              <li>✓ Up to 15 team members</li>
              <li>✓ 100 monitors</li>
              <li>✓ 5 status pages</li>
              <li>✓ 200+ integrations</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-white text-emerald-900 rounded-md">Get started with Enterprise</button>
          </div>
        </div>
      </div>
    </div>
  );
}
