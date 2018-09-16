import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, FormsModule],
})
export class SharedModule { }
