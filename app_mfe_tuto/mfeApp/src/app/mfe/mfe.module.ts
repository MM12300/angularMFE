import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'test',
      component: TestComponent
    }])
  ]
})
export class MfeModule { }
