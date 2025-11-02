"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    todayRevenue: 0,
    todayTransactions: 0,
    totalCustomers: 0,
    successRate: 0,
  });

  const [recentTransactions, setRecentTransactions] = useState([
    {
      id: "TRX001",
      product: "Pulsa Telkomsel 50K",
      customer: "John Doe",
      amount: 51500,
      status: "success",
      time: "10:30",
    },
    {
      id: "TRX002",
      product: "Mobile Legends 275 Diamond",
      customer: "Jane Smith",
      amount: 75000,
      status: "success",
      time: "10:25",
    },
    {
      id: "TRX003",
      product: "Token PLN 100K",
      customer: "Bob Wilson",
      amount: 102500,
      status: "processing",
      time: "10:20",
    },
    {
      id: "TRX004",
      product: "Paket Data XL 10GB",
      customer: "Alice Brown",
      amount: 45000,
      status: "success",
      time: "10:15",
    },
    {
      id: "TRX005",
      product: "Free Fire 1000 Diamond",
      customer: "Charlie Davis",
      amount: 250000,
      status: "success",
      time: "10:10",
    },
  ]);

  const [chartData, setChartData] = useState([
    { day: "Sen", amount: 2500000 },
    { day: "Sel", amount: 3200000 },
    { day: "Rab", amount: 2800000 },
    { day: "Kam", amount: 4100000 },
    { day: "Jum", amount: 3800000 },
    { day: "Sab", amount: 5200000 },
    { day: "Min", amount: 4500000 },
  ]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setStats({
        todayRevenue: Math.floor(Math.random() * 10000000) + 5000000,
        todayTransactions: Math.floor(Math.random() * 500) + 200,
        totalCustomers: Math.floor(Math.random() * 10000) + 50000,
        successRate: 99.5 + Math.random() * 0.5,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maxChartValue = Math.max(...chartData.map((d) => d.amount));

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Selamat datang kembali! Berikut ringkasan bisnis Anda hari ini.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <span className="text-green-500 text-sm font-semibold">
              +12.5%
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-1">Pendapatan Hari Ini</p>
          <p className="text-2xl font-bold text-gray-900">
            Rp {stats.todayRevenue.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <span className="text-green-500 text-sm font-semibold">+8.2%</span>
          </div>
          <p className="text-gray-600 text-sm mb-1">Transaksi Hari Ini</p>
          <p className="text-2xl font-bold text-gray-900">
            {stats.todayTransactions}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <span className="text-green-500 text-sm font-semibold">+5.7%</span>
          </div>
          <p className="text-gray-600 text-sm mb-1">Total Pelanggan</p>
          <p className="text-2xl font-bold text-gray-900">
            {stats.totalCustomers.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <span className="text-green-500 text-sm font-semibold">
              +0.3%
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-1">Tingkat Keberhasilan</p>
          <p className="text-2xl font-bold text-gray-900">
            {stats.successRate.toFixed(1)}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Pendapatan 7 Hari Terakhir
          </h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden">
                  <div
                    className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all duration-500"
                    style={{
                      height: `${(data.amount / maxChartValue) * 200}px`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-medium">
                  {data.day}
                </p>
                <p className="text-xs text-gray-500">
                  {(data.amount / 1000000).toFixed(1)}M
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Aksi Cepat
          </h2>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Transaksi Baru
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
              Tambah Produk
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
              Lihat Laporan
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
              Kelola Pelanggan
            </button>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Tips:</span> Aktifkan notifikasi
              untuk mendapatkan update transaksi real-time
            </p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Transaksi Terbaru
          </h2>
          <button className="text-blue-600 font-semibold hover:text-blue-700">
            Lihat Semua
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-600 font-semibold text-sm">
                  ID Transaksi
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold text-sm">
                  Produk
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold text-sm">
                  Pelanggan
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold text-sm">
                  Jumlah
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold text-sm">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold text-sm">
                  Waktu
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    {transaction.product}
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    {transaction.customer}
                  </td>
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    Rp {transaction.amount.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        transaction.status === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {transaction.status === "success"
                        ? "Berhasil"
                        : "Diproses"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {transaction.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
