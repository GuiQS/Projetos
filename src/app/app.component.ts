import { Component } from '@angular/core';
import { faCoffee, faPlusSquare, faFolderOpen, faCheckCircle, faTrash, faUndoAlt, faPrint, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Atores } from './Models/Atores';
import { Diretores } from './Models/Diretores';
import { FilmeCadastro } from './Models/FilmeCadastro';
import { Fornecedores } from './Models/Fornecedor';
import { Generos } from './Models/Generos';
import { TipoFilmes } from './Models/TipoFilme';
import { TipoProdutos } from './Models/TipoProduto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faPlusSquare = faPlusSquare
  faFolderOpen = faFolderOpen;
  faCheckCircle = faCheckCircle;
  faTrash = faTrash;
  faUndoAlt = faUndoAlt;
  faPrint = faPrint;
  faTimesCircle = faTimesCircle;

  tiposProduto: TipoProdutos[];
  tiposFilme: TipoFilmes[];
  generos: Generos[];
  atores: Atores[] ;
  diretores: Diretores[];
  fornecedores: Fornecedores[];
  filmesCadastro: FilmeCadastro[];
  dataAtual = new Date().toISOString().slice(0, 10)



  ngOnInit() {
    this.iniciarModels();
  }

  iniciarModels(): void {
    this.fornecedores = [
      {
        nome: "Antonio",
      },
      {
        nome: "Jessica",
      },
      {
        nome: "Bruna",
      }
    ];

    this.diretores = [
      {
        nome: "Leonardo",
      },
      {
        nome: "Leticia",
      },
      {
        nome: "Mayla",
      }
    ];

    this.atores = [
      {
        nome: "João",
      },
      {
        nome: "Gabriel",
      },
      {
        nome: "Henrique",
      }
    ];

    this.generos = [
      {
        nome: "Ação",
      },
      {
        nome: "Aventura",
      },
      {
        nome: "Comédia",
      }
    ];

    this.tiposFilme  = [
      {
        nome: "24 horas",
      },
      {
        nome: "35 minutos",
      },
      {
        nome: "40 segundos",
      }
    ];

    this.tiposProduto = [
      {
        nome: "Tipo 1",
      },
      {
        nome: "Teste 2",
      },
      {
        nome: "Finalizando teste",
      }
    ];

    this.filmesCadastro = [
      {
        numero: 1698,
        titulo: "Valozes Furiosos",
        valor: 2.50,
        data: new Date("2004-02-06").toISOString().slice(0, 10),
      },
      {
        numero: 1699,
        titulo: "007 um novo dia para morrer",
        valor: 2.50,
        data: new Date("2004-02-10").toISOString().slice(0, 10),
      },
      {
        numero: 1698,
        titulo: "60 segundos",
        valor: 2.00,
        data: new Date("2004-02-13").toISOString().slice(0, 10),
      },
    ];
  }
}
