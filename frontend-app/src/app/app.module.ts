import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaComponent } from './cursos/lista/lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CreatecursoComponent } from './cursos/createcurso/createcurso.component';
import { EditcursoComponent } from './cursos/editcurso/editcurso.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListapersonasComponent } from './personas/listapersonas/listapersonas.component';
import { NuevapersonaComponent } from './personas/nuevapersona/nuevapersona.component';
import { CursoService } from './services/curso.service';
import { PersonaService } from './services/persona.service';
import { TipopersonaService } from './services/tipopersona.service';
import { LoginComponent } from './login/login/login.component';
import { ListaCursosAlumnoComponent } from './cursos_alumno/lista-cursos-alumno/lista-cursos-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CreatecursoComponent,
    EditcursoComponent,
    ListapersonasComponent,
    NuevapersonaComponent,
    LoginComponent,
    ListaCursosAlumnoComponent
  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  exports: [AppComponent],
  providers: [HttpClientModule, CursoService, PersonaService, TipopersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
