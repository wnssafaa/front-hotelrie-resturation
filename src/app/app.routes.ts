import {RouterModule, Routes} from '@angular/router';
import {ResturationComponent} from "./resturation/resturation.component";
import {ResturationModule} from "./resturation/resturation.module";


export const routes: Routes = [
  { path: '', redirectTo: 'resturation', pathMatch: 'full' },
  { path: 'resturation', loadChildren: () => import('./resturation/resturation.module').then(m => m.ResturationModule) },
 { path: 'hotelerie', loadChildren: () => import('./hotelerie/hotelerie.module').then(m => m.HotelerieModule) },

];
