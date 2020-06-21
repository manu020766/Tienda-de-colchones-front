import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/Models/producto';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.less']
})
export class CreateProductoComponent implements OnInit {
  file:File
  photoSelected: string | ArrayBuffer

  formulario: FormGroup

  destacado: boolean
  _id: string
  titulo: string
  imagen: string
  precio: number
  categoria: string
  descripcion: string

  constructor(public fb: FormBuilder,
              public dialogoRef: MatDialogRef<CreateProductoComponent>,
              @Inject(MAT_DIALOG_DATA) data) { 
                this._id = data._id
                this.categoria = data.categoria
                this.titulo = data.titulo
                this.descripcion = data.descripcion
                this.precio = data.precio
                this.destacado = data.destacado
                this.imagen = data.imagen
              }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      "titulo": ['', Validators.required],
      "descripcion": ['', Validators.required],
      "precio": ['', Validators.required],
      "destacado": [false, Validators.required]
    })  
  }

  cancelar() {
    this.dialogoRef.close()
  }

  guardar() {
    let producto = {
      titulo : this.formulario.get('titulo').value,
      descripcion : this.formulario.get('descripcion').value,
      precio : this.formulario.get('precio').value,
      destacado : this.formulario.get('destacado').value,
      categoria: this.categoria,
      imagen: this.file.name,
      file: this.file
    }

    this.dialogoRef.close(producto)
  }

  onPhotoSelected(event: HtmlInputEvent):void {
    let selectedFile = <File>event.target.files[0]
    if (selectedFile) {
      this.file = selectedFile
  
      // image preview
      const reader = new FileReader()
      reader.readAsDataURL(this.file)
      
      reader.onload = (ev: ProgressEvent<FileReader>) => this.photoSelected = reader.result
    } else {
       alert('Ningun fichero seleccionado')
    }
  }
 
}
