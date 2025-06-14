import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Major Vietnamese cities
const majorCities = [
  { name: "Hà Nội", position: [21.0285, 105.8542], region: "Miền Bắc" },
  {
    name: "Thành phố Hồ Chí Minh",
    position: [10.8231, 106.6297],
    region: "Miền Nam",
  },
  { name: "Đà Nẵng", position: [16.0471, 108.2068], region: "Miền Trung" },
  { name: "Hải Phòng", position: [20.8449, 106.6881], region: "Miền Bắc" },
  { name: "Cần Thơ", position: [10.0452, 105.7469], region: "Miền Nam" },
  { name: "Huế", position: [16.4637, 107.5909], region: "Miền Trung" },
  { name: "Nha Trang", position: [12.2388, 109.1967], region: "Miền Trung" },
  { name: "Vũng Tàu", position: [10.4113, 107.1365], region: "Miền Nam" },
];

const VietnamMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Bản đồ Việt Nam hoàn chỉnh
        </h2>
        <p className="text-gray-600">
          Hiển thị các thành phố lớn và quần đảo Hoàng Sa, Trường Sa
        </p>
      </div>

      <div className="h-[600px] w-full rounded-lg overflow-hidden border">
        <MapContainer
          center={[16.0471, 108.2068]}
          zoom={6}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Major Vietnamese cities */}
          {majorCities.map((city) => (
            <Marker
              key={city.name}
              position={city.position as [number, number]}
              eventHandlers={{
                click: () => setSelectedCity(city.name),
              }}
            >
              <Popup>
                <div className="text-center">
                  <strong className="text-blue-600">{city.name}</strong>
                  <br />
                  <span className="text-sm text-gray-600">{city.region}</span>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Hoang Sa Islands */}
          <Marker position={[16.833, 112.333]}>
            <Popup>
              <div className="text-center">
                <strong className="text-red-600">Quần đảo Hoàng Sa</strong>
                <br />
                <span className="text-sm">
                  Lãnh thổ thiêng liêng của Việt Nam
                </span>
              </div>
            </Popup>
          </Marker>

          {/* Truong Sa Islands */}
          <Marker position={[10.733, 115.833]}>
            <Popup>
              <div className="text-center">
                <strong className="text-red-600">Quần đảo Trường Sa</strong>
                <br />
                <span className="text-sm">
                  Lãnh thổ thiêng liêng của Việt Nam
                </span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Thành phố lớn</h3>
          <p className="text-sm text-blue-600">
            {majorCities.length} thành phố chính
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Quần đảo Hoàng Sa</h3>
          <p className="text-sm text-red-600">Biển Đông - Lãnh thổ VN</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Quần đảo Trường Sa</h3>
          <p className="text-sm text-red-600">Biển Đông - Lãnh thổ VN</p>
        </div>
      </div>

      {selectedCity && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="text-green-800">
            <strong>Đã chọn:</strong> {selectedCity}
          </p>
        </div>
      )}
    </div>
  );
};

export default VietnamMap;
