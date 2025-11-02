import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Platform PPOB & Topup Game
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terpercaya & Otomatis
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nikmati kemudahan transaksi PPOB dan topup game dengan harga terbaik,
            proses otomatis, dan layanan 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ppob"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Mulai Transaksi
            </Link>
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Kenapa Pilih Atak PPOB?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl text-white font-bold">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Proses Otomatis
            </h3>
            <p className="text-gray-600">
              Transaksi diproses secara otomatis dalam hitungan detik tanpa perlu
              menunggu lama
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl text-white font-bold">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Harga Terbaik
            </h3>
            <p className="text-gray-600">
              Dapatkan harga paling kompetitif untuk semua produk PPOB dan topup
              game
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl text-white font-bold">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aman & Terpercaya
            </h3>
            <p className="text-gray-600">
              Transaksi dijamin aman dengan sistem keamanan berlapis dan garansi
              uang kembali
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Layanan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PPOB Card */}
            <Link
              href="/ppob"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900">PPOB</h3>
                <span className="text-4xl">📱</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pulsa Semua Operator
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Paket Data / Kuota Internet
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Token Listrik PLN
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  BPJS Kesehatan
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  E-Wallet (GoPay, OVO, Dana, ShopeePay)
                </li>
              </ul>
              <div className="mt-6 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Lihat Semua Produk →
              </div>
            </Link>

            {/* Topup Game Card */}
            <Link
              href="/topup-game"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900">Topup Game</h3>
                <span className="text-4xl">🎮</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Mobile Legends
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Free Fire
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  PUBG Mobile
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Genshin Impact
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Valorant & Game Lainnya
                </li>
              </ul>
              <div className="mt-6 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Lihat Semua Game →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600">Pengguna Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <div className="text-gray-600">Transaksi Sukses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600">Layanan Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600">Tingkat Keberhasilan</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Transaksi?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ribuan pengguna yang sudah mempercayai Atak PPOB
          </p>
          <Link
            href="/dashboard"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all inline-block"
          >
            Daftar Sekarang Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
