import {ModuleWithProviders, NgModule} from '@angular/core';
import {API_CONFIG} from './api-config';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [HttpClientModule],
  }
)
export class DriveApiModule {
  static withConfig(config: { api: string }): ModuleWithProviders {
    return {
      ngModule: DriveApiModule,
      providers: [
        {provide: API_CONFIG, useValue: config.api},
      ]
    };
  }
}
