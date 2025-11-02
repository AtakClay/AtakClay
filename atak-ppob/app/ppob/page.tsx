"use client";

import { useState } from "react";

type ProductCategory = "pulsa" | "data" | "pln" | "bpjs" | "ewallet";

interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  provider?: string;
}

export default function PPOBPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("pulsa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const products: Product[] = [
    // Pulsa
    {
      id: "PULSA-TSEL-10",
      name: "Pulsa Telkomsel 10.000",
      price: 11000,
      category: "pulsa",
      provider: "Telkomsel",
    },
    {
      id: "PULSA-TSEL-25",
      name: "Pulsa Telkomsel 25.000",
      price: 26000,
      category: "pulsa",
      provider: "Telkomsel",
    },
    {
      id: "PULSA-TSEL-50",
      name: "Pulsa Telkomsel 50.000",
      price: 51500,
      category: "pulsa",
      provider: "Telkomsel",
    },
    {
      id: "PULSA-XL-10",
      name: "Pulsa XL 10.000",
      price: 11000,
      category: "pulsa",
      provider: "XL",
    },
    {
      id: "PULSA-ISAT-25",
      name: "Pulsa Indosat 25.000",
      price: 26000,
      category: "pulsa",
      provider: "Indosat",
    },
    // Paket Data
    {
      id: "DATA-TSEL-3GB",
      name: "Paket Data Telkomsel 3GB 30 Hari",
      price: 35000,
      category: "data",
      provider: "Telkomsel",
    },
    {
      id: "DATA-TSEL-8GB",
      name: "Paket Data Telkomsel 8GB 30 Hari",
      price: 55000,
      category: "data",
      provider: "Telkomsel",
    },
    {
      id: "DATA-XL-10GB",
      name: "Paket Data XL 10GB 30 Hari",
      price: 45000,
      category: "data",
      provider: "XL",
    },
    {
      id: "DATA-ISAT-12GB",
      name: "Paket Data Indosat 12GB 30 Hari",
      price: 50000,
      category: "data",
      provider: "Indosat",
    },
    // Token PLN
    {
      id: "PLN-20",
      name: "Token PLN 20.000",
      price: 21000,
      category: "pln",
    },
    {
      id: "PLN-50",
      name: "Token PLN 50.000",
      price: 51500,
      category: "pln",
    },
    {
      id: "PLN-100",
      name: "Token PLN 100.000",
      price: 102500,
      category: "pln",
    },
    {
      id: "PLN-200",
      name: "Token PLN 200.000",
      price: 202500,
      category: "pln",
    },
    // BPJS
    {
      id: "BPJS-1",
      name: "BPJS Kesehatan Kelas 1",
      price: 150000,
      category: "bpjs",
    },
    {
      id: "BPJS-2",
      name: "BPJS Kesehatan Kelas 2",
      price: 100000,
      category: "bpjs",
    },
    {
      id: "BPJS-3",
      name: "BPJS Kesehatan Kelas 3",
      price: 42000,
      category: "bpjs",
    },
    // E-Wallet
    {
      id: "GOPAY-50",
      name: "GoPay 50.000",
      price: 51000,
      category: "ewallet",
      provider: "GoPay",
    },
    {
      id: "OVO-50",
      name: "OVO 50.000",
      price: 51000,
      category: "ewallet",
      provider: "OVO",
    },
    {
      id: "DANA-50",
      name: "Dana 50.000",
      price: 51000,
      category: "ewallet",
      provider: "Dana",
    },
    {
      id: "SHOPEE-50",
      name: "ShopeePay 50.000",
      price: 51000,
      category: "ewallet",
      provider: "ShopeePay",
    },
  ];

  const categories = [
    { id: "pulsa" as ProductCategory, name: "Pulsa", icon: "📱" },
    { id: "data" as ProductCategory, name: "Paket Data", icon: "📶" },
    { id: "pln" as ProductCategory, name: "Token PLN", icon: "⚡" },
    { id: "bpjs" as ProductCategory, name: "BPJS", icon: "🏥" },
    { id: "ewallet" as ProductCategory, name: "E-Wallet", icon: "💳" },
  ];

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  const handleOrder = async () => {
    if (!selectedProduct || !phoneNumber) {
      alert("Mohon lengkapi nomor dan pilih produk");
      return;
    }

    setIsProcessing(true);

    // Simulate API call for automatic order processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setOrderSuccess(false);
        setPhoneNumber("");
        setSelectedProduct(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan PPOB
          </h1>
          <p className="text-xl text-gray-600">
            Bayar tagihan dan isi pulsa dengan mudah dan cepat
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pilih Produk
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedProduct?.id === product.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      {selectedProduct?.id === product.id && (
                        <span className="text-blue-600 text-xl">✓</span>
                      )}
                    </div>
                    {product.provider && (
                      <p className="text-sm text-gray-600 mb-2">
                        {product.provider}
                      </p>
                    )}
                    <p className="text-lg font-bold text-blue-600">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Detail Pesanan
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {selectedCategory === "pln"
                      ? "Nomor Meter / ID Pelanggan"
                      : selectedCategory === "bpjs"
                      ? "Nomor Kartu BPJS"
                      : selectedCategory === "ewallet"
                      ? "Nomor HP / ID"
                      : "Nomor HP"}
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={
                      selectedCategory === "pln"
                        ? "Masukkan nomor meter"
                        : "Masukkan nomor"
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                {selectedProduct && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Produk</p>
                    <p className="font-semibold text-gray-900 mb-3">
                      {selectedProduct.name}
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <span className="text-gray-600">Total Bayar</span>
                      <span className="text-2xl font-bold text-blue-600">
                        Rp {selectedProduct.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleOrder}
                  disabled={!selectedProduct || !phoneNumber || isProcessing}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                    !selectedProduct || !phoneNumber || isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl"
                  }`}
                >
                  {isProcessing
                    ? "Memproses..."
                    : orderSuccess
                    ? "✓ Berhasil!"
                    : "Beli Sekarang"}
                </button>

                {orderSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold text-center">
                      ✓ Transaksi berhasil diproses secara otomatis!
                    </p>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-900 font-semibold mb-2">
                    ⚡ Proses Otomatis
                  </p>
                  <p className="text-xs text-blue-800">
                    Transaksi akan diproses secara otomatis dalam hitungan detik
                    setelah pembayaran dikonfirmasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
