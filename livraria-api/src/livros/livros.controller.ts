import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {Livro} from './livro.model';
import { LivrosService } from "./livros.service";


@Controller('livros')
export class LivrosController{

   constructor(private livrosService: LivrosService){}

   @Get()
   async obertTodos(): Promise<Livro[]> {
      return this.livrosService.obterTodos();
   }

   @Get(':id')
   async obterUm(@Param() params): Promise< Livro> {
      return this.livrosService.obterUm(params.id);

   }

   @Post()
   async criar(@Body() livro: Livro) {
       const novoLivro = await this.livrosService.criar(livro);
       return novoLivro;
   }   

   @Put(':id')
   async alterar(@Body() livro:Livro):Promise<number> {
      return this.livrosService.alterar(livro);
   }

   @Delete(':id')
  async apagar(@Param() params){
      this.livrosService.apagar(params.id);
   }
}