import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ArService } from './services/ar.service';
import { TracksService } from './services/tracks.service';

export const AR_SERVICES = [
    ArService,
    TracksService
];

@NgModule({
    imports: [HttpModule],
    providers: [],
    declarations: [],
    exports: [],
    entryComponents: []
})
export class ArCoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ArCoreModule,
            providers: [AR_SERVICES]
        };
    }
    constructor(@Optional() @SkipSelf() parentModule: ArCoreModule) {
        if (parentModule) {
            throw new Error(
                'TbCoreModule is already loaded. Import it in the AppModule only');
        }
    }
}