import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SearchComponent} from './search/search.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportDetailsComponent} from './report-details/report-details.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'search', component: SearchComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'report-details', component: ReportDetailsComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
