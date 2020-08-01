import { HttpInterceptor,HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import {Component, Inject, Injectable} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorComponent } from './error/error.component';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
  
    constructor(private dialog:MatDialog)
    {

    }
    intercept(req: HttpRequest<any>,next:HttpHandler)
    {
        //edting req and adding and sending
      
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse)=>{
                let errorMessage='An Unknown Error';
                if(error.error.message)
                {
                    errorMessage=error.error.message
                }
                this.dialog.open(ErrorComponent,{data:{message:errorMessage}});
               
                return throwError(error);
            }
        )
        )}
}