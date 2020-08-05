import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'Study KAPITA code base'},
  {title: 'Study KAPITA Vendor code base'},
  {title: 'Work on new e-commerce web app'},
];

@Injectable()
export class TodoListService {

  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
	this.todoList = 
    storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  
    
  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  addItem(item: TodoItem) {
	this.todoList.push(item);
	this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  updateItem(item: TodoItem, changes) {
	const index = this.todoList.indexOf(item);
	this.todoList[index] = { ...item, ...changes };
	this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  deleteItem(item: TodoItem) {
	const index = this.todoList.indexOf(item);
	this.todoList.splice(index, 1);
	this.saveList();
  }
  
  getTodoList() {
    return this.todoList;
  }

}
