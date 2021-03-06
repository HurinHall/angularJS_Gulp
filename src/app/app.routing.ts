import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
{path: '', component: AppComponent, data: {title: ''}},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
