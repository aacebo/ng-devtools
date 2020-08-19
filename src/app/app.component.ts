import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'ng-devtools';

  ngOnInit() {
    console.log(ng); 
  }
}
