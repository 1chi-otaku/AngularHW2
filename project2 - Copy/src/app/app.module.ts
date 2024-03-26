import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeWorldComponent } from './see-world/see-world.component';
import { DealsComponent } from './deals/deals.component';
import { TestComponent } from './test/test.component';
import { EditorComponent } from './editor/editor.component';
import { BooksComponent } from './Books/books/books.component';
import { PreviewComponent } from './Books/preview/preview.component';
import { IphoneComponent } from './iphone/iphone.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeWorldComponent,
    DealsComponent,
    TestComponent,
    EditorComponent,
    BooksComponent,
    PreviewComponent,
    IphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
