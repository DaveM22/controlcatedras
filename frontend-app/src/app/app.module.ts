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
import { ListaComisionesComponent } from './comisiones/lista-comisiones/lista-comisiones.component';
import { ComisionService } from './services/comision.service';
import { NuevaComisionComponent } from './comisiones/nueva-comision/nueva-comision.component';
import { EditarComisionComponent } from './comisiones/editar-comision/editar-comision.component';
import { BorrarComisionComponent } from './comisiones/borrar-comision/borrar-comision.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { comisionReducer } from './stores/reducers/comisiones';
import { ComisionEffect } from './stores/effects/comisiones';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CreatecursoComponent,
    EditcursoComponent,
    ListapersonasComponent,
    NuevapersonaComponent,
    LoginComponent,
    ListaCursosAlumnoComponent,
    ListaComisionesComponent,
    NuevaComisionComponent,
    EditarComisionComponent,
    BorrarComisionComponent,
    EditarPersonaComponent,
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
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('comisiones', comisionReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ComisionEffect])
  ],
  exports: [AppComponent],
  providers: [HttpClientModule, CursoService, PersonaService, TipopersonaService, ComisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
