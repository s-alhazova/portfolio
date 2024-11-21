import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly logoText: string = 'Sofia Alkhazova';
  public readonly portfolioLabel: string = 'Portfolio';
  public readonly aboutLabel: string = 'About me';
  public readonly contactLabel: string = 'Contact';

}
