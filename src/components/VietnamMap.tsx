import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { vietnamProvinces } from "../data/vietnamDataNew";

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

const VietnamMap: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const onEachFeature = (feature: any, layer: any) => {
    const provinceName = feature.properties.NAME_1 || feature.properties.name;

    layer.on({
      mouseover: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: "#666",
          dashArray: "",
          fillOpacity: 0.7,
        });
      },
      mouseout: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          weight: 2,
          color: "#3388ff",
          dashArray: "",
          fillOpacity: 0.2,
        });
      },
      click: (e: any) => {
        setSelectedProvince(provinceName);
        const layer = e.target;
        layer.bindPopup(`<strong>${provinceName}</strong>`).openPopup();
      },
    });
  };
  const provinceStyle = {
    fillColor: "#3388ff",
    weight: 2,
    opacity: 1,
    color: "#3388ff",
    dashArray: "3",
    fillOpacity: 0.2,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Bản đồ Việt Nam hoàn chỉnh
        </h2>
        <p className="text-gray-600">
          Hiển thị đầy đủ 63 tỉnh thành và quần đảo Hoàng Sa, Trường Sa
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

          {/* Vietnam mainland provinces */}
          {vietnamProvinces && (
            <GeoJSON
              data={vietnamProvinces}
              style={provinceStyle}
              onEachFeature={onEachFeature}
            />
          )}

          {/* Hoang Sa Islands */}
          <Marker position={[16.833, 112.333]}>
            <Popup>
              <div className="text-center">
                <strong className="text-vietnam-red">Quần đảo Hoàng Sa</strong>
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
                <strong className="text-vietnam-red">Quần đảo Trường Sa</strong>
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
          <h3 className="font-semibold text-blue-800">Lãnh thổ đất liền</h3>
          <p className="text-sm text-blue-600">63 tỉnh thành phố</p>
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

      {selectedProvince && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="text-green-800">
            <strong>Đã chọn:</strong> {selectedProvince}
          </p>
        </div>
      )}
    </div>
  );
};

export default VietnamMap;
