import { LineChart, BarChart2, TrendingUp, Map } from 'lucide-react';

export function MarketInsights() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 mr-3 text-blue-600" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Market Insights</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base font-semibold">Average Price</h3>
            <LineChart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">$425,000</p>
          <p className="text-green-600 text-xs sm:text-sm mt-1 sm:mt-2">↑ 5.2% from last month</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base font-semibold">Properties Listed</h3>
            <BarChart2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">1,234</p>
          <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">↓ 2.1% from last month</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base font-semibold">Days on Market</h3>
            <Map className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">28</p>
          <p className="text-green-600 text-xs sm:text-sm mt-1 sm:mt-2">↑ 3 days faster than last month</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base font-semibold">Sale to List</h3>
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">98.5%</p>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">0.2% change from last month</p>
        </div>
      </div>

      {/* Popular Neighborhoods and Market Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Popular Neighborhoods</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { name: 'Downtown Austin', price: '$550,000', change: '+6.8%' },
              { name: 'South Congress', price: '$485,000', change: '+4.2%' },
              { name: 'East Austin', price: '$425,000', change: '+7.5%' },
              { name: 'North Loop', price: '$398,000', change: '+3.9%' },
              { name: 'Zilker', price: '$675,000', change: '+5.1%' },
            ].map((neighborhood) => (
              <div
                key={neighborhood.name}
                className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-semibold">{neighborhood.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Median Price: {neighborhood.price}</p>
                </div>
                <span className="text-green-600 text-sm sm:text-base font-semibold">{neighborhood.change}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Market Trends</h2>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2">Property Types Distribution</h3>
              <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                <span>Single Family (45%)</span>
                <span>Condos (30%)</span>
                <span>Townhouses (25%)</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Price Range Distribution</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { range: 'Under $300k', percentage: '15%' },
                  { range: '$300k - $500k', percentage: '40%' },
                  { range: '$500k - $750k', percentage: '25%' },
                  { range: '$750k - $1M', percentage: '12%' },
                  { range: 'Over $1M', percentage: '8%' },
                ].map((item) => (
                  <div key={item.range} className="flex items-center group">
                    <span className="w-20 sm:w-24 text-xs sm:text-sm">{item.range}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2 sm:mx-3">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500 group-hover:bg-blue-700"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                    <span className="text-xs sm:text-sm">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Market Analysis</h2>
        <div className="prose max-w-none">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            The Austin real estate market continues to show strong growth in 2025, with increasing demand
            driving property values up across most neighborhoods. Key factors contributing to this trend include:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
            <li>Strong job market and continued tech sector growth</li>
            <li>Limited housing inventory in desirable neighborhoods</li>
            <li>Increasing interest from out-of-state buyers</li>
            <li>New development projects in emerging areas</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">
            Buyers should expect continued competition in popular neighborhoods, while emerging areas
            offer opportunities for value appreciation. The market shows particular strength in the
            $300k-$500k range, which represents the largest segment of current listings.
          </p>
        </div>
      </div>
    </div>
  );
}