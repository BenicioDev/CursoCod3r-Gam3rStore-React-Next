import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';
import { ProdutoPrisma } from './produto.prisma';
import { ProdutosRepositoryTs } from './produtos.repository.ts';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrisma, ProdutosRepositoryTs],
})
export class ProdutoModule {}
