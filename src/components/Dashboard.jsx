import React, { useState } from "react";
import { FiLogOut, FiUser, FiShoppingBag, FiHeart, FiSettings, FiTrendingUp, FiAward, FiMapPin, FiPhone } from "react-icons/fi";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://via.placeholder.com/150",
    joinDate: "January 2024",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    tier: "Gold",
    accountStatus: "Active",
  });

  const orders = [
    { id: 1, date: "Nov 28, 2025", status: "Delivered", amount: "$199.99", items: 2, icon: "✅", trackingNo: "TRK123456" },
    { id: 2, date: "Nov 25, 2025", status: "In Transit", amount: "$79.99", items: 1, icon: "🚚", trackingNo: "TRK123457" },
    { id: 3, date: "Nov 20, 2025", status: "Delivered", amount: "$299.99", items: 3, icon: "✅", trackingNo: "TRK123458" },
  ];

  const wishlist = [
    { id: 1, name: "Wireless Headphones", price: "$179.99", image: "https://via.placeholder.com/100", rating: 4.8 },
    { id: 2, name: "Smart Watch Pro", price: "$299.99", image: "https://via.placeholder.com/100", rating: 4.6 },
    { id: 3, name: "4K Camera Drone", price: "$699.99", image: "https://via.placeholder.com/100", rating: 4.9 },
  ];

  const recentActivities = [
    { id: 1, action: "Order Placed", description: "Order #1 for $199.99", timestamp: "2 hours ago", icon: "📦" },
    { id: 2, action: "Item Added to Wishlist", description: "Wireless Headphones", timestamp: "5 hours ago", icon: "❤️" },
    { id: 3, action: "Loyalty Points Earned", description: "200 points from last order", timestamp: "1 day ago", icon: "⭐" },
    { id: 4, action: "Coupon Applied", description: "SAVE20 - 20% discount", timestamp: "2 days ago", icon: "🎟️" },
  ];

  const addresses = [
    { id: 1, type: "Home", address: "123 Main St, New York, NY 10001", isDefault: true },
    { id: 2, type: "Work", address: "456 Business Ave, New York, NY 10002", isDefault: false },
  ];

  const paymentMethods = [
    { id: 1, type: "Credit Card", lastDigits: "4242", expiry: "12/26", isDefault: true },
    { id: 2, type: "Debit Card", lastDigits: "8976", expiry: "05/27", isDefault: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Header with Animation */}
        <div className="mb-12 animate-fade-in">
          <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-8 shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Welcome Back, {user.name}! 👋</h1>
              <p className="text-blue-100 text-lg">Manage your orders, wishlist, and account settings in one place</p>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 - Orders */}
          <div className="group bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Total Orders</p>
                <p className="text-4xl font-extrabold text-blue-600 mt-2">12</p>
                <p className="text-green-600 text-xs mt-1 flex items-center gap-1"><FiTrendingUp size={14} /> +2 this month</p>
              </div>
              <div className="bg-blue-100 group-hover:bg-blue-200 transition p-4 rounded-full">
                <FiShoppingBag className="text-3xl text-blue-600" />
              </div>
            </div>
          </div>

          {/* Card 2 - Spent */}
          <div className="group bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Total Spent</p>
                <p className="text-4xl font-extrabold text-green-600 mt-2">$2,499</p>
                <p className="text-blue-600 text-xs mt-1">Average: $208.25/order</p>
              </div>
              <div className="bg-green-100 group-hover:bg-green-200 transition p-4 rounded-full">
                <div className="text-3xl">💳</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Wishlist */}
          <div className="group bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Saved Items</p>
                <p className="text-4xl font-extrabold text-purple-600 mt-2">{wishlist.length}</p>
                <p className="text-pink-600 text-xs mt-1">Worth $1,179.97</p>
              </div>
              <div className="bg-purple-100 group-hover:bg-purple-200 transition p-4 rounded-full">
                <FiHeart className="text-3xl text-purple-600" />
              </div>
            </div>
          </div>

          {/* Card 4 - Loyalty */}
          <div className="group bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Loyalty Points</p>
                <p className="text-4xl font-extrabold text-orange-600 mt-2">1,250</p>
                <p className="text-blue-600 text-xs mt-1">Level: <span className="font-bold">Gold</span> ⭐</p>
              </div>
              <div className="bg-orange-100 group-hover:bg-orange-200 transition p-4 rounded-full">
                <FiAward className="text-3xl text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Modern Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="flex gap-0 overflow-x-auto border-b border-gray-200">
            {[
              { id: "overview", label: "Overview", icon: "👤" },
              { id: "orders", label: "My Orders", icon: "📦" },
              { id: "wishlist", label: "Wishlist", icon: "❤️" },
              { id: "addresses", label: "Addresses", icon: "📍" },
              { id: "payments", label: "Payments", icon: "💳" },
              { id: "settings", label: "Settings", icon: "⚙️" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-semibold transition text-center whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-4 border-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Profile Header Background */}
                <div className="h-32 bg-blue-600"></div>
                
                <div className="px-6 pb-6">
                  {/* Avatar */}
                  <div className="flex justify-center -mt-16 mb-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-center text-blue-600 mb-1">{user.name}</h2>
                  <p className="text-center text-gray-600 text-sm mb-1">Gold Member since {user.joinDate}</p>
                  
                  {/* Contact Info */}
                  <div className="mt-6 space-y-3 text-sm text-gray-700 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <FiPhone className="text-blue-600" size={18} />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-blue-600" size={18} />
                      <span>{user.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold transform hover:scale-105">
                      Edit Profile
                    </button>
                    <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition font-semibold">
                      Change Password
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 text-red-600 py-2 hover:bg-red-50 rounded-lg transition font-semibold">
                      <FiLogOut /> Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Summary & Offers */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Summary */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                  <FiUser /> Account Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b hover:bg-blue-50 px-2 py-1 rounded transition">
                    <span className="text-gray-700 font-medium">Total Purchases</span>
                    <span className="font-bold text-blue-600 text-lg">12 orders</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b hover:bg-blue-50 px-2 py-1 rounded transition">
                    <span className="text-gray-700 font-medium">Total Spent</span>
                    <span className="font-bold text-green-600 text-lg">$2,499.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b hover:bg-blue-50 px-2 py-1 rounded transition">
                    <span className="text-gray-700 font-medium">Average Order</span>
                    <span className="font-bold text-blue-600 text-lg">$208.25</span>
                  </div>
                  <div className="flex justify-between items-center hover:bg-blue-50 px-2 py-1 rounded transition">
                    <span className="text-gray-700 font-medium">Member Status</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">
                      🏆 Gold Member
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                  📊 Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-3 hover:bg-blue-50 rounded-lg transition border-l-4 border-blue-300">
                      <span className="text-3xl">{activity.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{activity.action}</p>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{activity.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusive Offer Banner */}
              <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2">🎉 Exclusive Offer</h3>
                <p className="mb-3 text-blue-100">Get <span className="font-bold text-white text-lg">20% OFF</span> on your next order!</p>
                <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4 border border-white border-opacity-30">
                  <p className="text-sm font-semibold">Use code: <span className="text-2xl font-bold">SAVE20</span></p>
                </div>
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-bold transform hover:scale-105">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-blue-600">Your Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Tracking</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Items</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-blue-50 transition">
                      <td className="px-6 py-4 font-bold text-blue-600">#{order.id}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{order.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{order.icon}</span>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm font-mono">{order.trackingNo}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{order.items} items</td>
                      <td className="px-6 py-4 font-bold text-blue-600 text-lg">{order.amount}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800 font-bold transition hover:underline">
                          View →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === "wishlist" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-600">Your Wishlist</h2>
              <p className="text-gray-600">3 items saved • Total value: $1,179.97</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
                  <div className="relative overflow-hidden h-48">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ❤️
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{item.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                      <button className="text-red-500 hover:text-red-700 transition transform hover:scale-125">
                        ❌
                      </button>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition font-bold transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-600">Saved Addresses</h2>
                <p className="text-gray-600">Manage your delivery addresses</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                + Add Address
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((addr) => (
                <div key={addr.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition border-2 border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-2">
                        {addr.type}
                      </span>
                      {addr.isDefault && (
                        <span className="inline-block ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                          Default
                        </span>
                      )}
                    </div>
                    <span className="text-2xl">📍</span>
                  </div>
                  <p className="text-gray-700 mb-4">{addr.address}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition font-semibold">
                      Edit
                    </button>
                    <button className="flex-1 border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === "payments" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-600">Payment Methods</h2>
                <p className="text-gray-600">Manage your payment options</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                + Add Payment Method
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((payment) => (
                <div key={payment.id} className="bg-blue-600 rounded-xl shadow-lg p-6 text-white hover:shadow-2xl transition">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-blue-100 text-sm font-semibold uppercase">{payment.type}</p>
                      <p className="text-2xl font-bold mt-2">•••• •••• •••• {payment.lastDigits}</p>
                    </div>
                    <span className="text-4xl">💳</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-blue-100 text-xs uppercase">Expires</p>
                      <p className="text-lg font-semibold">{payment.expiry}</p>
                    </div>
                    {payment.isDefault && (
                      <span className="px-3 py-1 bg-green-400 text-green-900 rounded-full text-xs font-bold">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 bg-white bg-opacity-20 text-white py-2 rounded-lg hover:bg-opacity-30 transition font-semibold">
                      Edit
                    </button>
                    <button className="flex-1 bg-white bg-opacity-20 text-white py-2 rounded-lg hover:bg-opacity-30 transition font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Settings Options */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-2">
                  <FiSettings /> Account Settings
                </h2>

                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div className="border-b pb-6 hover:bg-blue-50 p-4 rounded transition">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">🔔 Email Notifications</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer accent-blue-600" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition">Promotional emails & offers</span>
                      </div>
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer accent-blue-600" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition">Weekly newsletter</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Updates */}
                  <div className="border-b pb-6 hover:bg-blue-50 p-4 rounded transition">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">📦 Order Updates</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer accent-blue-600" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition">SMS order updates</span>
                      </div>
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer accent-blue-600" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition">Email tracking updates</span>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Settings */}
                  <div className="pb-6 hover:bg-blue-50 p-4 rounded transition">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">🔒 Privacy Settings</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 font-medium">
                      <option>🌐 Public Profile</option>
                      <option>👥 Friends Only</option>
                      <option>🔒 Private Profile</option>
                    </select>
                  </div>

                  {/* Danger Zone */}
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="font-bold text-red-600 mb-3 text-lg">⚠️ Danger Zone</h3>
                    <p className="text-gray-700 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="w-full border-2 border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition font-bold transform hover:scale-105">
                      Delete Account
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold transform hover:scale-105">
                      Save Changes
                    </button>
                    <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition font-bold">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="lg:col-span-1">
              <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">💡 Quick Tips</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Keep your profile updated for personalized recommendations</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Enable notifications to never miss special offers</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Check your wishlist regularly for price drops</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Your loyalty points never expire!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
