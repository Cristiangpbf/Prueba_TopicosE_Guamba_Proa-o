import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// import { RouterModule } from '@angular/router';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab3PageModule } from '../tab3/tab3.module';

@NgModule({
  entryComponents: [
    Tab3Page
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    Tab3PageModule

    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: Tab1Page
    //   }
    // ]),

  ],

  declarations: [Tab1Page]
})
export class Tab1PageModule {}
