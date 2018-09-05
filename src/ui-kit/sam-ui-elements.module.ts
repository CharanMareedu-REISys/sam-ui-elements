
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamComponentsModule } from './components';
import { SamDirectivesModule } from './directives';
import { SamElementsModule } from './elements';
import { SamFormControlsModule } from './form-controls';
import { SamFormTemplatesModule } from './form-templates';
import { SamLayoutModule } from './layout';
import { SamExperimentalModule } from './experimental';
import { SamPipesModule } from './pipes';
import { SamFormService } from './form-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SamComponentsModule,
    SamDirectivesModule,
    SamElementsModule,
    SamFormControlsModule,
    SamFormTemplatesModule,
    SamLayoutModule,
    SamExperimentalModule,
    SamPipesModule
  ],
  exports: [
    SamComponentsModule,
    SamDirectivesModule,
    SamElementsModule,
    SamFormControlsModule,
    SamFormTemplatesModule,
    SamLayoutModule,
    SamExperimentalModule,
    SamPipesModule
  ],
  providers: [SamFormService]
})
export class SamUIKitModule { }
