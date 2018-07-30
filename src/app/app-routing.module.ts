import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SelectComponent } from "./select/select.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [
  {
    path:"Home", component: HomeComponent
  },
  {
    path: "Select", component: SelectComponent
  },
  {
    path: "Gallery", component: GalleryComponent
  },
  {
    path:"", redirectTo: "Home", pathMatch: "full"
  }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
