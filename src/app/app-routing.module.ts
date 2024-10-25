import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './components/medicine/medicine.component';

const routes: Routes = [
  { path: 'medicines', component: MedicineComponent },
  { path: '', redirectTo: '/medicines', pathMatch: 'full' }, // Redirige a la lista de medicamentos
  { path: '**', redirectTo: '/medicines' } // Redirige en caso de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
