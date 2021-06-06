import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { QuillModule } from "ngx-quill";
import { LoadingComponent } from "src/app/admin/shared/components/loading/loading.component";
import { ScrollTopComponent } from "./scroll-to-top/scroll-to-top.component";

@NgModule({
    imports: [
        HttpClientModule,
        QuillModule.forRoot()],
    declarations: [
        LoadingComponent, 
        ScrollTopComponent
        
    ],
    exports: [
        HttpClientModule,
        LoadingComponent,
        ScrollTopComponent,
        QuillModule],
})
export class SharedModule {

}