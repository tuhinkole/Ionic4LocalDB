import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'name': "Example 1",
      'phone': 'description 1'
    },
    {
      'id': "2",
      'name': "Example 2",
      'phone': 'description 2'
    },
    {
      'id': "3",
      'name': "Example 3",
      'phone': 'description 3'
    },
    {
      'id': "4",
      'name': "Example 4",
      'phone': 'description 4'
    },
    {
      'id': "5",
      'name': "Need a more complex app?",
      'phone': 'Check the Ionic 4 Full Starter App.'
    }
  ]

  constructor() { }

  createItem(name, phone){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'name': name,
      'phone': phone
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
