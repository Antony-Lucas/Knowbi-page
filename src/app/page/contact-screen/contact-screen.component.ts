import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from '../../shared/footer-component/footer-component';
import { NavbarComponent } from '../../shared/navbar-component/navbar-component';
import { EmailService } from '../../services/email-service';

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

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      corporation: [''],
      message: [''],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.emailService.sendEmail(this.contactForm.value).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
