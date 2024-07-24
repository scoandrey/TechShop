import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Fridgers" },
      { id: 2, name: "Phones" },
      { id: 3, name: "TV" },
      { id: 4, name: "Laptops" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "MSI" },
    ];

    this._devices = [
      {
        id: 1,
        name: "Iphone 15 pro max",
        price: 1000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
      },
      {
        id: 2,
        name: "Iphone 15 pro max",
        price: 1000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
      },
      {
        id: 3,
        name: "Iphone 15 pro max",
        price: 1000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
      },
      {
        id: 4,
        name: "Iphone 15 pro max",
        price: 1000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
      },
      {
        id: 5,
        name: "Iphone 15 pro max",
        price: 1000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
      },
      {
        id: 6,
        name: "Iphone 15 pro max",
        price: 1000,
        rating: 5,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrand(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
