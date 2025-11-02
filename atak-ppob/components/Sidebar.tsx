"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/transactions", label: "Transaksi", icon: "💳" },
    { href: "/dashboard/products", label: "Produk", icon: "📦" },
    { href: "/dashboard/customers", label: "Pelanggan", icon: "👥" },
    { href: "/dashboard/reports", label: "Laporan", icon: "📈" },
    { href: "/dashboard/settings", label: "Pengaturan", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Atak PPOB
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Saldo Anda
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rp 5.250.000
          </p>
        </div>
      </div>
    </aside>
  );
}
