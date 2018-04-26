import { FeedbackListService } from './../services/feedback-list/feedback-list.service';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { FeedbackPage } from './../pages/feedback/feedback';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestimonialsPage } from './../pages/testimonials/testimonials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApplyPage } from '../pages/apply/apply';
import { SubjectListService } from '../services/subject-list/subject-list.service';
import { ProfessorsPage } from '../pages/professors/professors';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ApplyPage,
    FeedbackPage,
    TestimonialsPage,
    ProfessorsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FeedbackPage,
    ApplyPage,
    TestimonialsPage,
    ProfessorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedbackListService,
    SubjectListService
  ]
})
export class AppModule {}
