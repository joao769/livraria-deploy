import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { LivrosController } from "./livros.controller";
import { LivrosService } from "./livros.service";
import { Livro } from "./livro.model";

@Module({
    imports: [SequelizeModule.forFeature([Livro])],
    controllers: [LivrosController],
    providers: [LivrosService]
})
export class LivrosModule{}