import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { Livro } from "./livro.model";
import { InjectModel } from "@nestjs/sequelize";
import { Op } from 'sequelize';

@Injectable()
export class LivrosService {
    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ) {}

    private normalizarTexto(texto: string): string {
        return texto
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '')
            .toLowerCase();
    }

    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    async obterUm(id: number): Promise<Livro> {
        const livro = await this.livroModel.findByPk(id);
        if (!livro) {
            throw new NotFoundException(`Livro com ID ${id} não encontrado`);
        }
        return livro;
    }

    async criar(livro: Livro) {
        const tituloNormalizado = this.normalizarTexto(livro.titulo);

        const tituloExiste = await this.livroModel.findOne({
            where: { tituloNormalizado },
        });

        if (tituloExiste) {
            throw new BadRequestException('Título já cadastrado.');
        }

        const isbnExiste = await this.livroModel.findOne({
            where: { isbn: livro.isbn },
        });
        if (isbnExiste) {
            throw new BadRequestException('ISBN já cadastrado.');
        }

        livro.tituloNormalizado = tituloNormalizado;

        const novoLivro = await this.livroModel.create(livro);
        return novoLivro;

    }

    async alterar(livro: Livro): Promise<number> {
        const tituloNormalizado = this.normalizarTexto(livro.titulo);

        const tituloExiste = await this.livroModel.findOne({
            where: {
                tituloNormalizado,
                id: { [Op.ne]: livro.id }
            },
        });
        if (tituloExiste) {
            throw new BadRequestException('Título já cadastrado.');
        }

        const isbnExiste = await this.livroModel.findOne({
            where: {
                isbn: livro.isbn,
                id: { [Op.ne]: livro.id }
            },
        });
        if (isbnExiste) {
            throw new BadRequestException('ISBN já cadastrado.');
        }

        livro.tituloNormalizado = tituloNormalizado;

        const [affectedCount] = await this.livroModel.update(livro, {
            where: {
                id: livro.id,
            },
        });

        return affectedCount;
    }

    async apagar(id: number) {
        const livro: Livro = await this.obterUm(id)
        livro.destroy();
    }
}