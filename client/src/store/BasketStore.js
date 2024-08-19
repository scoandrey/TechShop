import { makeAutoObservable } from "mobx";

export default class BasketStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(device) {
    const existingItem = this.items.find((item) => item.id === device.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...device, quantity: 1 });
    }
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
