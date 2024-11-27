import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioItem } from '../../shared/models/portfolio-item.model';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {
  public portfolioItems: PortfolioItem[] = [];

  private portfolioService = inject(PortfolioService);

  ngOnInit(): void {
      this.portfolioItems = this.portfolioService.getAllItems().slice().reverse();
  }
}
