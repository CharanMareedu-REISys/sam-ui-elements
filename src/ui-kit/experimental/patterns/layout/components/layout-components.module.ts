import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { SamPageNextComponent } from './page';
import { MdSidenavModule } from './sidenav';
import { SamActionBarComponent } from './actionbar.component';
import { SamLayoutComponent } from './layout.component';
import { SamMainComponent } from './main.component';
import { SamPaginationNextComponent } from './pagination';
import { SamToolbarComponent } from './toolbar.component';
import {
  SamFeedbackWrapperComponent
} from './feedback-wrapper.component';
import {
  SamFiltersWrapperComponent
} from './filters-wrapper.component';
import {
  SamResourcesWrapperComponent
} from './resources-wrapper.component';
import {
  SamDatabankTitleSectionDirective
} from './title-section.component';
import { MdExpansionModule } from './expansion';
import { SamMainContentComponent } from './main-content.component';
import { SamContentOutletDirective } from './content-outlet.directive';
import { SamAsideToggleComponent } from './aside-toggle.component';
import { SamComponentsModule } from '../../../../components';
import { SamActionsListModule } from '../../../actions-list';
import { SamReportingMainComponent } from './template/reporting-main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdExpansionModule,
    SamComponentsModule,
    SamActionsListModule
  ],
  declarations: [
    // Components
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamMainContentComponent,
    SamPaginationNextComponent,
    SamToolbarComponent,
    SamFeedbackWrapperComponent,
    SamFiltersWrapperComponent,
    SamResourcesWrapperComponent,
    SamPageNextComponent,
    SamAsideToggleComponent,
    SamReportingMainComponent,
    
    // Directives
    SamDatabankTitleSectionDirective,
    SamContentOutletDirective,

  ],
  exports: [
    // Modules
    MdExpansionModule,
    MdSidenavModule,

    // Components
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamMainContentComponent,
    SamPaginationNextComponent,
    SamToolbarComponent,
    SamFeedbackWrapperComponent,
    SamFiltersWrapperComponent,
    SamResourcesWrapperComponent,
    SamPageNextComponent,
    SamAsideToggleComponent,
    SamReportingMainComponent,

    // Directives
    SamDatabankTitleSectionDirective,
    SamContentOutletDirective,
  ]
})
export class SamLayoutComponentsModule {}
