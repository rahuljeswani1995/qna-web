import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestDataResolver } from './resolvers/test-data.resolver';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "login",
    component: WelcomeComponent
  },
  {
    path: "main",
    component: MainPageComponent
  },
  {
    path: "test",
    component: TestComponent,
    resolve: {serverData: TestDataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
