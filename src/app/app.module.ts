import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './screens/home/home.component';
import { InventoryComponent } from './screens/inventory/inventory.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductModalComponent } from './components/edit-product-modal/edit-product-modal.component';
import { CollapseIconComponent } from './components/collapse-icon/collapse-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent,
    ProductListComponent,
    HomeComponent,
    InventoryComponent,
    ContentContainerComponent,
    AddProductModalComponent,
    EditProductModalComponent,
    CollapseIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
