import './vendor';
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

import {App} from './components/app';

document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(App, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
  .catch(err => console.error(err));
});
