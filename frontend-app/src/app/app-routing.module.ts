import { NgModule } from '@angular/core';
import { ListaComponent } from './cursos/lista/lista.component';
import { CreatecursoComponent } from './cursos/createcurso/createcurso.component';
import { Routes, RouterModule } from '@angular/router';
import { EditcursoComponent } from './cursos/editcurso/editcurso.component';
import { ListapersonasComponent } from './personas/listapersonas/listapersonas.component';
import { NuevapersonaComponent } from './personas/nuevapersona/nuevapersona.component';
import { LoginComponent } from './login/login/login.component';
import { ListaCursosAlumnoComponent } from './cursos_alumno/lista-cursos-alumno/lista-cursos-alumno.component';


const routes: Routes = [
  { path: 'miscursos', component: ListaCursosAlumnoComponent },
  { path: 'cursos', component: ListaComponent },
  { path: 'cursos/nuevo', component: CreatecursoComponent },
  { path: 'cursos/editar/:id', component: EditcursoComponent },
  { path: 'personas', component: ListapersonasComponent },
  { path: 'personas/nuevo', component: NuevapersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
