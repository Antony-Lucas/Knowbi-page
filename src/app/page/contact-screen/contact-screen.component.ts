import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from '../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../shared/navbar-component/navbar-component';

@Component({
  selector: 'app-contact-screen',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavbarComponent,
    FooterComponent,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './contact-screen.component.html',
  styleUrl: './contact-screen.component.css',
})
export class ContactScreenComponent {
  disableSelect = new FormControl(false);
}
