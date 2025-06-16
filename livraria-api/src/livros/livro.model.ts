import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro> {

    @Column({
        type: DataType.STRING(250),
        allowNull: false,
        unique: true,
    })
    titulo: string;

    @Column({
        type: DataType.STRING(250),
        allowNull: false,
        unique: true,
    })
    tituloNormalizado: string;

    @Column({
        type: DataType.STRING(250),
        allowNull: false,
    })
    autor: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    anoPublicacao: number;

    @Column({
        type: DataType.STRING(13),
        allowNull: true,
        unique: true,
    })
    isbn: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true,
    })
    genero: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    numPaginas: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    descricao: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: true,
    })
    preco: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    imagemUrl: string;
}
