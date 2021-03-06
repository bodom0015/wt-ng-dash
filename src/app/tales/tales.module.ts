import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@framework/core';
import { MaterialModule } from '@framework/material';
import { TalesService } from '@tales/tales.service';

import { CopyOnLaunchModalComponent } from './components/modals/copy-on-launch-modal/copy-on-launch-modal.component';
import { TaleRunButtonComponent } from './components/tale-run-button/tale-run-button.component';
import { TaleCreatorPipe } from './pipes/tale-creator.pipe';
import { TaleImagePipe } from './pipes/tale-image.pipe';

@NgModule({
  declarations: [CopyOnLaunchModalComponent, TaleRunButtonComponent, TaleCreatorPipe, TaleImagePipe],
  exports: [TaleRunButtonComponent, CopyOnLaunchModalComponent, TaleCreatorPipe, TaleImagePipe],
  providers: [TalesService],
  imports: [CommonModule, SharedModule, MaterialModule, MatDialogModule],
  entryComponents: [CopyOnLaunchModalComponent]
})
export class TalesModule {}
