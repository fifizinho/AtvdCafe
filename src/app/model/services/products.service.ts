import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Iced Coffee', price: 35.0, description: '⭐⭐⭐', image: './coffeeIce.png'},
    {id: 2, name: 'Vermelho Branco e Sangue Azul', price: 35.5, description: 'Casey McQuiston', image: './livro2.png'},
    {id: 3, name: 'Os 7 maridos de Evelyn Hugo', price: 25.0, description: 'Taylro Jenkins Reid', image: './livro3.png'},
    {id: 4, name: 'Um milhão de finais felizes', price: 20.0, description: 'Vitor Martins', image: './livro4.png'},

  ];
  getProducts(): Iproducts[]{
    return this.products;
  }
}