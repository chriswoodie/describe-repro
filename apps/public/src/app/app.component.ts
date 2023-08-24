import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibAnchorComponent } from '@describe-repro/stylekit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, LibAnchorComponent],
})
export class AppComponent {

  constructor() {}
}
