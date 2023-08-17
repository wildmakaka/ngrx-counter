import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CounterButtonsComponent } from 'src/app/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from 'src/app/counter/counter-output/counter-output.component';
import { CounterComponent } from 'src/app/counter/counter/counter.component';
import { counterReducer } from 'src/app/counter/counter/state/counter.reducer';
import { COUNTER_STATE_NAME } from 'src/app/counter/counter/state/counter.selectors';
import { CustomCounterInputComponent } from 'src/app/counter/custom-counter-input/custom-counter-input.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ],
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
  ],
})
export class CounterModule {}
