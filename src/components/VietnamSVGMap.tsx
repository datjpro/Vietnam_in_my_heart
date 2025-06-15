import React, { useState } from 'react';
import { vietnamProvinces, Province } from '../data/vietnamProvinces';

const VietnamSVGMap: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  const handleProvinceClick = (province: Province) => {
    setSelectedProvince(province);
  };

  const handleProvinceHover = (provinceId: string | null) => {
    setHoveredProvince(provinceId);
  };

  // Định nghĩa các vùng của bản đồ bằng SVG paths đơn giản
  const provincesPaths = {
    // Miền Bắc
    'ha-noi': 'M200,120 L240,120 L240,160 L200,160 Z',
    'hai-phong': 'M240,120 L280,120 L280,160 L240,160 Z',
    'quang-ninh': 'M280,80 L340,80 L340,140 L280,140 Z',
    'hai-duong': 'M240,160 L280,160 L280,200 L240,200 Z',
    'hung-yen': 'M200,160 L240,160 L240,200 L200,200 Z',
    'thai-binh': 'M160,160 L200,160 L200,200 L160,200 Z',
    'ha-nam': 'M160,200 L200,200 L200,240 L160,240 Z',
    'nam-dinh': 'M120,200 L160,200 L160,240 L120,240 Z',
    'ninh-binh': 'M160,240 L200,240 L200,280 L160,280 Z',
    'thanh-hoa': 'M100,280 L200,280 L200,340 L100,340 Z',
    
    // Miền Trung
    'nghe-an': 'M80,340 L180,340 L180,400 L80,400 Z',
    'ha-tinh': 'M80,400 L180,400 L180,460 L80,460 Z',
    'quang-binh': 'M80,460 L180,460 L180,520 L80,520 Z',
    'quang-tri': 'M80,520 L180,520 L180,580 L80,580 Z',
    'thua-thien-hue': 'M80,580 L180,580 L180,640 L80,640 Z',
    'da-nang': 'M180,620 L220,620 L220,660 L180,660 Z',
    'quang-nam': 'M140,640 L220,640 L220,700 L140,700 Z',
    'quang-ngai': 'M140,700 L220,700 L220,760 L140,760 Z',
    'binh-dinh': 'M140,760 L220,760 L220,820 L140,820 Z',
    'phu-yen': 'M140,820 L220,820 L220,880 L140,880 Z',
    'khanh-hoa': 'M140,880 L220,880 L220,940 L140,940 Z',
    'ninh-thuan': 'M160,940 L240,940 L240,1000 L160,1000 Z',
    'binh-thuan': 'M180,1000 L280,1000 L280,1060 L180,1060 Z',
    
    // Miền Nam
    'ho-chi-minh': 'M280,1060 L360,1060 L360,1120 L280,1120 Z',
    'dong-nai': 'M360,1060 L440,1060 L440,1120 L360,1120 Z',
    'binh-duong': 'M280,1000 L360,1000 L360,1060 L280,1060 Z',
    'ba-ria-vung-tau': 'M440,1060 L520,1060 L520,1120 L440,1120 Z',
    'tay-ninh': 'M200,1000 L280,1000 L280,1060 L200,1060 Z',
    'binh-phuoc': 'M200,940 L280,940 L280,1000 L200,1000 Z',
    'long-an': 'M200,1120 L280,1120 L280,1180 L200,1180 Z',
    'dong-thap': 'M120,1120 L200,1120 L200,1180 L120,1180 Z',
    'tien-giang': 'M280,1120 L360,1120 L360,1180 L280,1180 Z',
    'an-giang': 'M40,1120 L120,1120 L120,1180 L40,1180 Z',
    'ben-tre': 'M360,1120 L440,1120 L440,1180 L360,1180 Z',
    'vinh-long': 'M200,1180 L280,1180 L280,1240 L200,1240 Z',
    'tra-vinh': 'M280,1180 L360,1180 L360,1240 L280,1240 Z',
    'can-tho': 'M120,1180 L200,1180 L200,1240 L120,1240 Z',
    'hau-giang': 'M120,1240 L200,1240 L200,1300 L120,1300 Z',
    'soc-trang': 'M200,1240 L280,1240 L280,1300 L200,1300 Z',
    'bac-lieu': 'M120,1300 L200,1300 L200,1360 L120,1360 Z',
    'ca-mau': 'M160,1360 L240,1360 L240,1420 L160,1420 Z',
    'kien-giang': 'M40,1240 L120,1240 L120,1360 L40,1360 Z',
  };

  const getProvinceColor = (provinceId: string, region: 'north' | 'central' | 'south') => {
    if (selectedProvince?.id === provinceId) return '#dc2626'; // red-600
    if (hoveredProvince === provinceId) return '#ef4444'; // red-500
    
    switch (region) {
      case 'north': return '#3b82f6'; // blue-500
      case 'central': return '#10b981'; // green-500  
      case 'south': return '#f59e0b'; // amber-500
      default: return '#6b7280'; // gray-500
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Bản đồ Việt Nam
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Bản đồ SVG */}
          <div className="flex-1">
            <svg
              viewBox="0 0 600 1500"
              className="w-full h-auto border border-gray-200 rounded-lg"
              style={{ maxHeight: '600px' }}
            >
              {/* Render các tỉnh thành */}
              {vietnamProvinces.map((province) => (
                <path
                  key={province.id}
                  d={provincesPaths[province.id as keyof typeof provincesPaths]}
                  fill={getProvinceColor(province.id, province.region)}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                  onClick={() => handleProvinceClick(province)}
                  onMouseEnter={() => handleProvinceHover(province.id)}
                  onMouseLeave={() => handleProvinceHover(null)}
                >
                  <title>{province.name}</title>
                </path>
              ))}
              
              {/* Chú thích màu sắc */}
              <g transform="translate(450, 50)">
                <text x="0" y="0" className="text-sm font-semibold" fill="#374151">
                  Miền:
                </text>
                <rect x="0" y="10" width="15" height="15" fill="#3b82f6" />
                <text x="20" y="22" className="text-xs" fill="#374151">Bắc</text>
                <rect x="0" y="30" width="15" height="15" fill="#10b981" />
                <text x="20" y="42" className="text-xs" fill="#374151">Trung</text>
                <rect x="0" y="50" width="15" height="15" fill="#f59e0b" />
                <text x="20" y="62" className="text-xs" fill="#374151">Nam</text>
              </g>
            </svg>
          </div>
          
          {/* Thông tin tỉnh thành */}
          <div className="lg:w-80">
            {selectedProvince ? (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {selectedProvince.name}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Thủ phủ:</span>
                    <span className="ml-2 text-gray-800">{selectedProvince.capital}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Dân số:</span>
                    <span className="ml-2 text-gray-800">
                      {selectedProvince.population.toLocaleString()} người
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Diện tích:</span>
                    <span className="ml-2 text-gray-800">
                      {selectedProvince.area.toLocaleString()} km²
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Miền:</span>
                    <span className="ml-2 text-gray-800 capitalize">
                      {selectedProvince.region === 'north' ? 'Bắc' : 
                       selectedProvince.region === 'central' ? 'Trung' : 'Nam'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-600">
                  Nhấp vào một tỉnh thành trên bản đồ để xem thông tin chi tiết
                </p>
              </div>
            )}
            
            {/* Danh sách tỉnh thành */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Danh sách tỉnh thành ({vietnamProvinces.length})
              </h4>
              <div className="max-h-64 overflow-y-auto space-y-1">
                {vietnamProvinces.map((province) => (
                  <button
                    key={province.id}
                    onClick={() => handleProvinceClick(province)}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      selectedProvince?.id === province.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {province.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VietnamSVGMap;
