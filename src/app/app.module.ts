import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarDataService } from './services/car.data.service';
import { MasterCarsComponent } from './components/master-cars/master-cars.component';
import { DetailCarsComponent } from './components/detail-cars/detail-cars.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './services/filter.models';
import { ComparisonModalComponent } from './components/master-cars/comparison-modal/comparison-modal.component';

const appRoutes: Routes = [
  { path: '', component: MasterCarsComponent },
  { path: 'detail/:id', component: DetailCarsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MasterCarsComponent,
    DetailCarsComponent,
    NotFoundComponent,
    FilterPipe,
    ComparisonModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
