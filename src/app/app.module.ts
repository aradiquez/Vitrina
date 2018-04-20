import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarDataService } from './services/car.data.service';
import { MasterCarsComponent } from './components/master-cars/master-cars.component';
import { DetailCarsComponent } from './components/detail-cars/detail-cars.component';
import { ComparatorComponent } from './components/comparator/comparator.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './services/filter.models';

const appRoutes: Routes = [
  { path: '', component: MasterCarsComponent },
  { path: 'detail/:id', component: DetailCarsComponent },
  { path: 'comparation', component: ComparatorComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MasterCarsComponent,
    DetailCarsComponent,
    ComparatorComponent,
    NotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
