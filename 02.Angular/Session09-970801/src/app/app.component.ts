import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'برنامه اول انگولار';
  showTitle = false;
  names = ['C#', 'Java', 'PHP'];

  getDate(): string {
    return '1397/07/15';
  }


}
