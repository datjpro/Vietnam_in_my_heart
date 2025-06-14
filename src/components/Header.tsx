import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🇻🇳 Việt Nam Trong Tim Tôi</h1>
          <div className="text-right">
            <p className="text-sm opacity-90">Bản đồ Việt Nam hoàn chỉnh</p>
            <p className="text-xs opacity-75">Bao gồm Hoàng Sa & Trường Sa</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
