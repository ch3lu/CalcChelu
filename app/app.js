import {ViewChild} from '@angular/core';
import {App, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CalculatorPage} from './pages/calculator/calculator';


@App({
  templateUrl: 'build/app.html',
  config: { mode: "md" }, // http://ionicframework.com/docs/v2/api/config/Config/
  queries: {
    nav: new ViewChild('content')
  }
})
class MyApp {
  static get parameters() {
    return [[Platform], [MenuController]];
  }

  constructor(platform, menu) {
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Calculator', component: CalculatorPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = CalculatorPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
