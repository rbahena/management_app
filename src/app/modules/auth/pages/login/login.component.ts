import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private formBuild: FormBuilder
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
    }
    console.log(this.loginForm.value);
  }

  public get f(): any {
    return this.loginForm.controls;
  }
}
