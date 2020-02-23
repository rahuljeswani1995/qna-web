import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TestComponent,
    MainPageComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
