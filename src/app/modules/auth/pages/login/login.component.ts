import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private formBuild: FormBuilder,
    private router: Router
  ) {}

  public loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  private createLoginForm(): FormGroup {
    return this.formBuild.group({
      correo_electronico: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    });
  }

  public login() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    const userData = this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/panel-trabajo']);
      },
      error: (error) => {
        alert(error);
      },
      complete: () => console.log('done'),
    });
  }

  public get f(): any {
    return this.loginForm.controls;
  }
}
