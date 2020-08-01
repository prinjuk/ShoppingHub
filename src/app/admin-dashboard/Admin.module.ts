import { NgModule } from '@angular/core';
import { AdminRouter } from './Admin-routing';

@NgModule({
    imports:[AdminRouter],
    exports:[AdminRouter]
})
export class AdminModule{}