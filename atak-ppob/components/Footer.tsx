import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">Atak PPOB</span>
            </div>
            <p className="text-sm text-gray-400">
              Platform PPOB dan topup game terpercaya dengan harga terbaik dan
              proses otomatis.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ppob" className="hover:text-blue-400 transition-colors">
                  Pulsa & Paket Data
                </Link>
              </li>
              <li>
                <Link href="/ppob" className="hover:text-blue-400 transition-colors">
                  Token Listrik PLN
                </Link>
              </li>
              <li>
                <Link href="/ppob" className="hover:text-blue-400 transition-colors">
                  E-Wallet
                </Link>
              </li>
              <li>
                <Link href="/topup-game" className="hover:text-blue-400 transition-colors">
                  Topup Game
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@atakppob.com</li>
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Jam Operasional: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Atak PPOB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
