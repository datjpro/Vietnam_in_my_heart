import React from 'react';
import { vietnamProvinces, getTotalPopulation, getTotalArea, getProvincesByRegion } from '../data/vietnamProvinces';

const VietnamStats: React.FC = () => {
  const totalPopulation = getTotalPopulation();
  const totalArea = getTotalArea();
  const northProvinces = getProvincesByRegion('north');
  const centralProvinces = getProvincesByRegion('central');
  const southProvinces = getProvincesByRegion('south');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📊 Thống kê Việt Nam
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{vietnamProvinces.length}</div>
          <div className="text-sm text-blue-800">Tỉnh/Thành phố</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{totalArea.toLocaleString()} km²</div>
          <div className="text-sm text-green-800">Diện tích</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{Math.round(totalPopulation/1000000)}+ triệu</div>
          <div className="text-sm text-purple-800">Dân số</div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">3</div>
          <div className="text-sm text-yellow-800">Vùng miền</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            🗺️ Phân bố theo vùng miền
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Miền Bắc</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">
                {northProvinces.length} tỉnh/thành
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Miền Trung</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                {centralProvinces.length} tỉnh/thành
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Miền Nam</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-medium">
                {southProvinces.length} tỉnh/thành
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            🏝️ Quần đảo thiêng liêng
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Hoàng Sa</span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                Biển Đông
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Trường Sa</span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                Biển Đông
              </span>
            </div>
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
