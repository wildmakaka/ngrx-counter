import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, exhaustMap } from 'rxjs';
import { getToken } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      exhaustMap((token) => {
        console.log('INTERCEPT');
        console.log(token);
        if (!token) {
          return next.handle(req);
        }
        let modifiedReq = req.clone({
          params: req.params.append('auth', token),
        });

        console.log('modifiedReq');
        console.log(modifiedReq);
        return next.handle(modifiedReq);
      })
    );
  }
}
