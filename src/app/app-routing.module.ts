import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';
import { EventListComponent } from './event-list/event-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  {path: '', component:SearchCriteriaComponent},
   {path: 'search-criteria', component: SearchCriteriaComponent},
   {path: 'event-list', component: EventListComponent},
   {path: 'bucketlist-page', component: BucketlistPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
