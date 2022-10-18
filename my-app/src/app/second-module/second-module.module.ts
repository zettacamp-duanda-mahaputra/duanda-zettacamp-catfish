import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { AudioComponent } from './audio/audio.component';



@NgModule({
  declarations: [
    ImageComponent,
    VideoComponent,
    AudioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageComponent,
    VideoComponent,
    AudioComponent
  ]
})
export class SecondModuleModule { }
