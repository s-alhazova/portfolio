import { Injectable } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Dota 2',
      images: ['assets/img/portfolio/1/1.webp', 'assets/img/portfolio/1/2.webp', 'assets/img/portfolio/1/3.webp'],
    },
    {
      id: '2',
      title: 'Decor trash',
      images: ['assets/img/portfolio/2/1.webp', 'assets/img/portfolio/2/2.webp', 'assets/img/portfolio/2/3.webp', 'assets/img/portfolio/2/4.webp'],
    },
    {
      id: '3',
      title: 'Инфографика. Дизайн карточек товара',
      images: ['assets/img/portfolio/3/1.webp', 'assets/img/portfolio/3/2.webp', 'assets/img/portfolio/3/3.webp', 'assets/img/portfolio/3/4.webp', 'assets/img/portfolio/3/5.webp', 'assets/img/portfolio/3/6.webp'],
    },
    {
      id: '4',
      title: 'Дизайн карточки товара. Инфографика',
      images: ['assets/img/portfolio/4/1.webp', 'assets/img/portfolio/4/2.webp', 'assets/img/portfolio/4/3.webp', 'assets/img/portfolio/4/4.webp', 'assets/img/portfolio/4/5.webp'],
    },
    {
      id: '5',
      title: 'Фирменный стиль кофейни',
      images: ['assets/img/portfolio/5/1.webp', 'assets/img/portfolio/5/2.webp', 'assets/img/portfolio/5/3.webp', 'assets/img/portfolio/5/4.webp', 'assets/img/portfolio/5/5.webp', 'assets/img/portfolio/5/6.webp', 'assets/img/portfolio/5/7.webp', 'assets/img/portfolio/5/8.webp', 'assets/img/portfolio/5/9.webp'],
    },
  ];

  public getAllItems(): PortfolioItem[] {
    return this.portfolioItems;
  }

  public getItemById(id: string): PortfolioItem | undefined {
    return this.portfolioItems.find(item => item.id === id);
  }
}
