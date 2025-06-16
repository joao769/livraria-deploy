import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { LivrosModule } from './livros/livros.module';

@Module({imports:[
      ConfigModule.forRoot(),
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.MEU_USUARIO_BANCO_DADOS,
        password: process.env.MINHA_SENHA_BANCO_DADOS,
        database: 'livraria',
        autoLoadModels: true,
        synchronize: true,
      }),
      LivrosModule
    ],
  controllers: [],
  providers: []
})
export class AppModule {}
