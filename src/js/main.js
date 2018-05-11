import Router from './router';
import Layout from './layout';
import Page from './page';

const r = new Router(
    {
      about: new Layout(new Page('menu.html'), new Page('about.html')),
      settings: new Layout(new Page('menu.html'), new Page('settings.html')),
      options: new Layout(new Page('menu.html'), new Page('options.html')),
      home: new Layout(new Page('menu.html'), new Page('home.html')),
      '#default': new Layout(new Page('menu.html'), new Page('home.html'))
    },
    document.querySelector('main')
  );
  