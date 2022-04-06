import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InventoryComponent } from './screens/inventory/inventory.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inventory", component: InventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
