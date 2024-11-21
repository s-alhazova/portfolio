import { Injectable } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Дизайн карточки товара. Инфографика',
      images: ['assets/img/portfolio/1/1.webp', 'assets/img/portfolio/1/2.webp', 'assets/img/portfolio/1/3.webp', 'assets/img/portfolio/1/4.webp', 'assets/img/portfolio/1/5.webp'],
    },
    {
      id: '2',
      title: 'Инфографика. Дизайн карточек товара',
      images: ['assets/img/portfolio/2/1.webp', 'assets/img/portfolio/2/2.webp', 'assets/img/portfolio/2/3.webp', 'assets/img/portfolio/2/4.webp', 'assets/img/portfolio/2/5.webp', 'assets/img/portfolio/2/6.webp'],
    },
    {
      id: '3',
      title: 'Decor trash',
      images: ['assets/img/portfolio/3/1.webp', 'assets/img/portfolio/3/2.webp', 'assets/img/portfolio/3/3.webp', 'assets/img/portfolio/3/4.webp'],
    },
    {
      id: '4',
      title: 'Dota 2',
      images: ['assets/img/portfolio/4/1.webp', 'assets/img/portfolio/4/2.webp', 'assets/img/portfolio/4/3.webp'],
    },
  ];

  public getAllItems(): PortfolioItem[] {
    return this.portfolioItems;
  }

  public getItemById(id: string): PortfolioItem | undefined {
    return this.portfolioItems.find(item => item.id === id);
  }
}
