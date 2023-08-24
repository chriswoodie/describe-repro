import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class LibAnchorComponent {

  @Input() link?: string;
  
  public get isExternalLink() {
    return false;
  }
}
