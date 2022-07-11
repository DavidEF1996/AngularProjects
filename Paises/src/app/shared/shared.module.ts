import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from './lateral/lateral.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [LateralComponent],
  imports: [CommonModule, RouterModule],
  exports: [LateralComponent],
})
export class SharedModule {}
