import React from "react";
import { vietnamStats } from "../data/vietnamDataNew";

const VietnamStats: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📊 Thống kê Việt Nam
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">
            {vietnamStats.totalProvinces}
          </div>
          <div className="text-sm text-blue-800">Tỉnh/Thành phố</div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">
            {vietnamStats.totalArea}
          </div>
          <div className="text-sm text-green-800">Diện tích</div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">
            {vietnamStats.population}
          </div>
          <div className="text-sm text-purple-800">Dân số</div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">4</div>
          <div className="text-sm text-yellow-800">Vùng miền</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            🗺️ Phân bố theo vùng miền
          </h3>
          <div className="space-y-2">
            {Object.entries(vietnamStats.regions).map(([region, count]) => (
              <div key={region} className="flex justify-between items-center">
                <span className="text-gray-600">{region}</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
                  {count} tỉnh/thành
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            🏝️ Quần đảo thiêng liêng
          </h3>
          <div className="space-y-2">
            {Object.entries(vietnamStats.islands).map(([island, location]) => (
              <div key={island} className="flex justify-between items-center">
                <span className="text-gray-600">{island}</span>
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                  {location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg">
        <p className="text-center font-semibold">
          🇻🇳 Việt Nam - Một dải đất hình chữ S xinh đẹp bên bờ Thái Bình Dương
        </p>
        <p className="text-center text-sm mt-1 opacity-90">
          Hoàng Sa, Trường Sa - Lãnh thổ thiêng liêng không thể chia cắt
        </p>
      </div>
    </div>
  );
};

export default VietnamStats;
