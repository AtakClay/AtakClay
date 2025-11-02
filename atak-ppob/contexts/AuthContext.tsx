"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateBalance: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("atakppob_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get users from localStorage
    const usersData = localStorage.getItem("atakppob_users");
    const users = usersData ? JSON.parse(usersData) : [];

    // Find user
    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone,
        balance: foundUser.balance || 0,
      };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("atakppob_user", JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const register = async (
    name: string,
    email: string,
    phone: string,
    password: string
  ): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get existing users
    const usersData = localStorage.getItem("atakppob_users");
    const users = usersData ? JSON.parse(usersData) : [];

    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      return false;
    }

    // Create new user
    const newUser = {
      id: `USER-${Date.now()}`,
      name,
      email,
      phone,
      password,
      balance: 0,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("atakppob_users", JSON.stringify(users));

    // Auto login after register
    const userData: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      balance: newUser.balance,
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("atakppob_user", JSON.stringify(userData));

    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("atakppob_user");
  };

  const updateBalance = (amount: number) => {
    if (user) {
      const updatedUser = { ...user, balance: user.balance + amount };
      setUser(updatedUser);
      localStorage.setItem("atakppob_user", JSON.stringify(updatedUser));

      // Update in users list
      const usersData = localStorage.getItem("atakppob_users");
      if (usersData) {
        const users = JSON.parse(usersData);
        const userIndex = users.findIndex((u: any) => u.id === user.id);
        if (userIndex !== -1) {
          users[userIndex].balance = updatedUser.balance;
          localStorage.setItem("atakppob_users", JSON.stringify(users));
        }
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout, updateBalance }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
