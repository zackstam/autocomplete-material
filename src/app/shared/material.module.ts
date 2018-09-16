import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatSlideToggleModule],
  exports: [MatButtonModule, MatAutocompleteModule, MatInputModule, MatSlideToggleModule],
  declarations: []
})
export class MaterialModule { }
