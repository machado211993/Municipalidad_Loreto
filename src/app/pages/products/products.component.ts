import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Producto 1",
      price: 99.99,
      description: "Descripción detallada del producto 1",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      name: "Producto 2",
      price: 149.99,
      description: "Descripción detallada del producto 2",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      name: "Producto 3",
      price: 199.99,
      description: "Descripción detallada del producto 3",
      image: "https://via.placeholder.com/300x200"
    },
    // Agrega más productos según necesites
  ];
}