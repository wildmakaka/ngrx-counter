import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getLoading } from 'src/app/store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'App';
  showLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
  }
}
