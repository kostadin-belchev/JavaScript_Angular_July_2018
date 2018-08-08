import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {

      switch (err.status) {
        case 401:
          this.toastr.error(err.error.message, 'Warning!')
          break
        case 400:
          const messages = Object.keys(err.error.errors).map((keyOfErrors) => err.error.errors[keyOfErrors]).join("\n")
          this.toastr.error(messages, 'Warning!')
          break
        default:
          // Unknown error
          break
      }

      return throwError(err)
    }));
  }
}