import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
if (environment.production) {
  enableProdMode();
}
registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCdkx3QHxbf1xzZFNMZF9bQX5PMyBoS35RdUVkWHlednBWQ2lZUE11")
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
