import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioItem } from '../../../shared/models/portfolio-item.model';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../../shared/services/portfolio.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioItemComponent implements OnInit {
  public item: PortfolioItem | undefined;

  private activatedRoute = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);

  public readonly infoText: string = 'Sofiya Alkhazova';
  public readonly telegramLink: string = '@sonnnneiko';
  public readonly backToTop: string = 'Back to top';
  public readonly itemError: string = 'Статья не найдена';

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.item = this.portfolioService.getItemById(id);
      }
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
