import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      })
      // const headers = req.headers.set('Authorization', `Bearer ${currentUser.token}`);
      // const authReq = req.clone({ headers });
      // return next.handle(authReq);
    }
    return next.handle(req).pipe(tap((res : any) => {
      if (res instanceof HttpResponse && res.body.token) {
        this.saveToken(res.body)
        this.toastr.success(res.body.message, 'Success!')
        this.router.navigate(['/furniture/all'])
      }

      if (res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')) {
        this.toastr.success(res.body.message, 'Success!')
        this.router.navigate(['/signin'])
      }

      if (res instanceof HttpResponse && res.body.success && res.url.endsWith('create')) {
        this.toastr.success(res.body.message, 'Success!')
        this.router.navigate(['/furniture/all'])
      }

      if (res instanceof HttpResponse && res.body.success && res.url.includes('delete')) {
        this.toastr.success(res.body.message, 'Success!')
        this.router.navigate(['/furniture/all'])
      }

      if (res instanceof HttpResponse && res.body.success && res.url.includes('edit')) {
        this.toastr.success(res.body.message || 'Item edited succussfully.', 'Success!')
        this.router.navigate(['/furniture/all'])
      }
    }))
  }

  private saveToken(data) {
    localStorage.setItem('currentUser', JSON.stringify({
      "username": data.user.name,
      "token": data.token,
      "isAdmin": data.user.isAdmin
    }))
  }
}
