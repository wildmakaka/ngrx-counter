import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonsComponent } from 'src/app/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from 'src/app/counter/counter-output/counter-output.component';
import { CounterComponent } from 'src/app/counter/counter/counter.component';
import { CustomCounterInputComponent } from 'src/app/counter/custom-counter-input/custom-counter-input.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
  ],
})
export class CounterModule {}
