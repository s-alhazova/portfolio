import emailjs from 'emailjs-com'
import { ChangeDetectionStrategy, Component, inject, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  public readonly title: string = 'Contact';
  public readonly nameLabel: string = 'Имя';
  public readonly emailLabel: string = 'Email адрес';
  public readonly messageLabel: string = 'Сообщение';
  public readonly submitLabel: string = 'Отправить';

  public isLoading = false;

  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  public readonly contactForm : FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  public onSubmit(): void {

    if (this.contactForm.valid) {
      this.isLoading = true;

      const { name, email, message } = this.contactForm.value;

      const serviceID = 'service_i6coxcl';
      const templateID = 'template_m3to8lo';
      const publicKey = 'JM3Bt1RicMItTvyiX';

      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
          this.isLoading = false;
          this.snackBar.open(
            'Сообщение успешно отправлено!',
            'Закрыть',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['success-snackbar'],
          });
          this.contactForm.reset();
        })
        .catch(() => {
          this.isLoading = false;
          this.snackBar.open(
            'Ошибка при отправке сообщения. Попробуйте снова',
            'Закрыть',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['error-snackbar'],
            }
          );
        });
    }
  }
}
