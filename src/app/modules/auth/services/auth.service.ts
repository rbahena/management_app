import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpClient) {}

  URL_API = environment.ApiGestion;
  CONTROLLER = 'users';

  login(loginUserDto: LoginUserDto): Observable<any> {
    const urlCompleted = `${(this.URL_API, this.CONTROLLER)}`;
    console.log(urlCompleted);
    return this.httpService
      .post<any>(urlCompleted, loginUserDto)
      .pipe(
        map((response: any) => {
          console.log('Response User: ', response);
          //saveToken();
        }),
        catchError((error) => this.handlerError(error))
      );
  }

  logout() {}
  private readToken() {}
  private saveToken() {}
  private handlerError(error: any): Observable<never> {
    let errorMessage = 'Ocurrio un error al intentar iniciar sesión';
    return throwError(errorMessage);
  }
}
