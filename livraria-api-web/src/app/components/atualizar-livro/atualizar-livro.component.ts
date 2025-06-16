import { Component, NgModule, OnInit } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../services/types/types';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizar-livro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './atualizar-livro.component.html',
  styleUrl: './atualizar-livro.component.css'
})
export class AtualizarLivroComponent implements OnInit {

  mensagemErro: string = '';

  generos = [
    { label: 'Romance' },
    { label: 'Ficção' },
    { label: 'Terror' },
    { label: 'Suspense' },
    { label: 'Autoajuda' },
    { label: 'Biografia' },
    { label: 'Fantasia' },
    { label: 'Aventura' },
    { label: 'Mistério' },
    { label: 'Histórico' },
    { label: 'Policial' },
    { label: 'Infantil' },
    { label: 'Juvenil' },
    { label: 'Drama' },
    { label: 'Humor' },
    { label: 'Poesia' },
    { label: 'Ficção Científica' },
    { label: 'Clássico' }
  ];

  formModified: any;

  ngOnInit(): void {
    this.initializeForm();
  }

  userForm: FormGroup = new FormGroup({});
  initializeForm() {
    this.userForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(250), this.noOnlySpacesValidator]],
      autor: ['', [Validators.required, Validators.maxLength(250), Validators.pattern(/^[^\d]*$/), this.noOnlySpacesValidator]],
      anoPublicacao: ['', [Validators.required, Validators.min(1500), Validators.max(new Date().getFullYear())]],
      isbn: ['', [Validators.required, Validators.pattern(/^(?:\d{9}[\dXx]|\d{13})$/), this.noOnlySpacesValidator]],
      genero: ['', [Validators.required]],
      numPaginas: ['', [Validators.required, Validators.min(1)]],
      descricao: ['', [Validators.required, Validators.maxLength(1000), this.noOnlySpacesValidator]],
      preco: ['', [Validators.required, Validators.min(0), Validators.pattern(/^-?\d+(\.\d{1,2})?$/)]],
      imagemUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i)]],
    })
  }

  noOnlySpacesValidator(control: AbstractControl) {
    const isValid = control.value && control.value.trim().length > 0;
    return isValid ? null : { onlySpaces: true };
  }

  livroId?: number;

  livro: Livro = {} as Livro;

  tituloFormulario: string = 'Editar Livro';

  constructor(
    private fb: FormBuilder,
    private service: LivrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.livroId = Number(this.route.snapshot.params['id']);

    if (this.livroId) {
      this.service.buscarPorId(this.livroId).subscribe(livro => {
        if (livro) {
          this.userForm.patchValue({
            titulo: livro.titulo,
            autor: livro.autor,
            anoPublicacao: livro.anoPublicacao,
            isbn: livro.isbn,
            genero: livro.genero,
            numPaginas: livro.numPaginas,
            descricao: livro.descricao,
            preco: livro.preco,
            imagemUrl: livro.imagemUrl
          });
        }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/livros/listar']);
  }

  submeter() {
    if (this.userForm.valid && this.livroId) {
      this.service.editar({ id: this.livroId, ...this.userForm.value }).subscribe({
        next: () => {
          this.router.navigate(['/livros']);
        },
        error: (err) => {
          this.mensagemErro = err.error.message || 'Erro ao editar livro.';
        }
      });
    }
  }
}