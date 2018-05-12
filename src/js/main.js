import Router from './router';
import Layout from './layout';
import Page from './page';

const r = new Router(
    {
      settings: new Layout(new Page('menu.html'), new Page('settings.html')),
      option1: new Layout(new Page('menu.html'), new Page('option1.html')),
      option2: new Layout(new Page('menu.html'), new Page('option2.html')),
      about: new Layout(new Page('menu.html'), new Page('about.html')),
      '#default': new Layout(new Page('menu.html'), new Page('about.html'))
    },
    document.querySelector('main')
  );
  