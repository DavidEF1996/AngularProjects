import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from './lateral/lateral.component';

@NgModule({
  declarations: [LateralComponent],
  imports: [CommonModule],
  exports: [LateralComponent],
})
export class SharedModule {}
