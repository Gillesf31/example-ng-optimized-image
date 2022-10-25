import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tech-pres-img-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgCardComponent {
  @Input() imgUrl = '';
}
