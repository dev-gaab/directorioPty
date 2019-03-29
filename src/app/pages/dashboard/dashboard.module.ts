import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      { path: 'searcher', loadChildren: '../searcher/searcher.module#SearcherPageModule' },
      { path: 'close-to-me', loadChildren: '../close-to-me/close-to-me.module#CloseToMePageModule' },
      { path: 'categories', loadChildren: '../categories/categories.module#CategoriesPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/searcher',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
