import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComisionService } from 'src/app/services/comision.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comision } from 'src/app/entities/comision';

@Component({
  selector: 'app-editar-comision',
  templateUrl: './editar-comision.component.html',
  styleUrls: ['./editar-comision.component.css']
})
export class EditarComisionComponent implements OnInit {

  constructor(private Service: ComisionService) { }
  @Input() comision: Comision = null;
  @Output() modoFormEvent: EventEmitter<Object> = new EventEmitter<string>();
  ngOnInit() {
    this.fillForm();
  }

  form = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    nivel: new FormControl('', Validators.required)
  });

  public updateComision(): void {
    let com: Comision = {
      id: this.comision.id,
      descripcion: this.form.get("descripcion").value,
      nivel: Number(this.form.get("nivel").value)
    };
    this.Service.UpdateComision(com).subscribe(x => this.comision = com);
    this.ReturnToListEvent();
  }

  public ReturnToListEvent(): void {
    this.modoFormEvent.emit({ modo: 'R', com: this.comision });
  }

  public cancelCreate(): void {
    this.modoFormEvent.emit({ modo: 'R' })
  }

  public fillForm(): void {
    this.form.patchValue({ descripcion: this.comision.descripcion, nivel: this.comision.nivel })
  }

}
