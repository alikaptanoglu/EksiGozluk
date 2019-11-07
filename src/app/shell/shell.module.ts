import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [ShellComponent]
})
export class ShellModule { }
