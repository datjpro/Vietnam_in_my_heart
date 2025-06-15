export interface Province {
  id: string;
  name: string;
  population: number;
  area: number;
  capital: string;
  region: 'north' | 'central' | 'south';
}

export const vietnamProvinces: Province[] = [
  // Miền Bắc
  { id: 'ha-noi', name: 'Hà Nội', population: 8330000, area: 3359, capital: 'Hà Nội', region: 'north' },
  { id: 'hai-phong', name: 'Hải Phòng', population: 2028000, area: 1526, capital: 'Hải Phòng', region: 'north' },
  { id: 'quang-ninh', name: 'Quảng Ninh', population: 1320000, area: 6102, capital: 'Hạ Long', region: 'north' },
  { id: 'hai-duong', name: 'Hải Dương', population: 1909000, area: 1668, capital: 'Hải Dương', region: 'north' },
  { id: 'hung-yen', name: 'Hưng Yên', population: 1241000, area: 926, capital: 'Hưng Yên', region: 'north' },
  { id: 'thai-binh', name: 'Thái Bình', population: 1869000, area: 1571, capital: 'Thái Bình', region: 'north' },
  { id: 'ha-nam', name: 'Hà Nam', population: 850000, area: 860, capital: 'Phủ Lý', region: 'north' },
  { id: 'nam-dinh', name: 'Nam Định', population: 1918000, area: 1653, capital: 'Nam Định', region: 'north' },
  { id: 'ninh-binh', name: 'Ninh Bình', population: 982000, area: 1377, capital: 'Ninh Bình', region: 'north' },
  { id: 'thanh-hoa', name: 'Thanh Hóa', population: 3689000, area: 11132, capital: 'Thanh Hóa', region: 'north' },
  
  // Miền Trung
  { id: 'nghe-an', name: 'Nghệ An', population: 3327000, area: 16494, capital: 'Vinh', region: 'central' },
  { id: 'ha-tinh', name: 'Hà Tĩnh', population: 1291000, area: 6057, capital: 'Hà Tĩnh', region: 'central' },
  { id: 'quang-binh', name: 'Quảng Bình', population: 884000, area: 8065, capital: 'Đồng Hới', region: 'central' },
  { id: 'quang-tri', name: 'Quảng Trị', population: 640000, area: 4746, capital: 'Đông Hà', region: 'central' },
  { id: 'thua-thien-hue', name: 'Thừa Thiên Huế', population: 1158000, area: 5009, capital: 'Huế', region: 'central' },
  { id: 'da-nang', name: 'Đà Nẵng', population: 1134000, area: 1286, capital: 'Đà Nẵng', region: 'central' },
  { id: 'quang-nam', name: 'Quảng Nam', population: 1495000, area: 10438, capital: 'Tam Kỳ', region: 'central' },
  { id: 'quang-ngai', name: 'Quảng Ngãi', population: 1278000, area: 5153, capital: 'Quảng Ngãi', region: 'central' },
  { id: 'binh-dinh', name: 'Bình Định', population: 1501000, area: 6051, capital: 'Quy Nhon', region: 'central' },
  { id: 'phu-yen', name: 'Phú Yên', population: 877000, area: 5061, capital: 'Tuy Hòa', region: 'central' },
  { id: 'khanh-hoa', name: 'Khánh Hòa', population: 1236000, area: 5218, capital: 'Nha Trang', region: 'central' },
  { id: 'ninh-thuan', name: 'Ninh Thuận', population: 590000, area: 3360, capital: 'Phan Rang', region: 'central' },
  { id: 'binh-thuan', name: 'Bình Thuận', population: 1230000, area: 7813, capital: 'Phan Thiết', region: 'central' },
  
  // Miền Nam
  { id: 'ho-chi-minh', name: 'TP Hồ Chí Minh', population: 9000000, area: 2095, capital: 'TP Hồ Chí Minh', region: 'south' },
  { id: 'dong-nai', name: 'Đồng Nai', population: 3157000, area: 5907, capital: 'Biên Hòa', region: 'south' },
  { id: 'binh-duong', name: 'Bình Dương', population: 2706000, area: 2695, capital: 'Thủ Dầu Một', region: 'south' },
  { id: 'ba-ria-vung-tau', name: 'Bà Rịa - Vũng Tàu', population: 1148000, area: 1990, capital: 'Vũng Tàu', region: 'south' },
  { id: 'tay-ninh', name: 'Tây Ninh', population: 1170000, area: 4040, capital: 'Tây Ninh', region: 'south' },
  { id: 'binh-phuoc', name: 'Bình Phước', population: 981000, area: 6876, capital: 'Đồng Xoài', region: 'south' },
  { id: 'long-an', name: 'Long An', population: 1688000, area: 4494, capital: 'Tân An', region: 'south' },
  { id: 'dong-thap', name: 'Đồng Tháp', population: 1687000, area: 3238, capital: 'Cao Lãnh', region: 'south' },
  { id: 'tien-giang', name: 'Tiền Giang', population: 1738000, area: 2367, capital: 'Mỹ Tho', region: 'south' },
  { id: 'an-giang', name: 'An Giang', population: 1908000, area: 3537, capital: 'Long Xuyên', region: 'south' },
  { id: 'ben-tre', name: 'Bến Tre', population: 1288000, area: 2360, capital: 'Bến Tre', region: 'south' },
  { id: 'vinh-long', name: 'Vĩnh Long', population: 1025000, area: 1475, capital: 'Vĩnh Long', region: 'south' },
  { id: 'tra-vinh', name: 'Trà Vinh', population: 1015000, area: 2295, capital: 'Trà Vinh', region: 'south' },
  { id: 'can-tho', name: 'Cần Thơ', population: 1282000, area: 1409, capital: 'Cần Thơ', region: 'south' },
  { id: 'hau-giang', name: 'Hậu Giang', population: 769000, area: 1608, capital: 'Vị Thanh', region: 'south' },
  { id: 'soc-trang', name: 'Sóc Trăng', population: 1301000, area: 3312, capital: 'Sóc Trăng', region: 'south' },
  { id: 'bac-lieu', name: 'Bạc Liêu', population: 902000, area: 2669, capital: 'Bạc Liêu', region: 'south' },
  { id: 'ca-mau', name: 'Cà Mau', population: 1194000, area: 5332, capital: 'Cà Mau', region: 'south' },
  { id: 'kien-giang', name: 'Kiên Giang', population: 1780000, area: 6346, capital: 'Rạch Giá', region: 'south' },
];

export const getTotalPopulation = (): number => {
  return vietnamProvinces.reduce((total, province) => total + province.population, 0);
};

export const getTotalArea = (): number => {
  return vietnamProvinces.reduce((total, province) => total + province.area, 0);
};

export const getProvincesByRegion = (region: 'north' | 'central' | 'south'): Province[] => {
  return vietnamProvinces.filter(province => province.region === region);
};
