import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ServersComponent } from './servers/servers.component';

const appRoute : Routes = [  
  { path: '', component: HomeComponent },  
  { path: 'properties', component: PropertiesComponent },  
  { path: 'accounts', component: AccountsComponent },  
  { path: 'users', component: UsersComponent },  
  { path: 'login', component: LoginComponent },  
  { path: 'cars', component: CarsComponent },  
  { path: 'servers', component: ServersComponent },  

  {path: "**", redirectTo: ""}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    AccountsComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
