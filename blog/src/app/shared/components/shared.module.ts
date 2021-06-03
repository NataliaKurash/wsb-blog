import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { QuillModule } from "ngx-quill";
import { LoadingComponent } from "src/app/admin/shared/components/loading/loading.component";

@NgModule({
    imports: [
        HttpClientModule,
        QuillModule.forRoot()],
    declarations: [
        LoadingComponent, 
        
    ],
    exports: [
        HttpClientModule,
        LoadingComponent,
        QuillModule],
})
export class SharedModule {

}