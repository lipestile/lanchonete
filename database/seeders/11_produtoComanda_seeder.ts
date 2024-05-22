import ProdutoComanda from '#models/produto_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await ProdutoComanda.createMany([
     {produtoId: 1, comandaId: 1, quantidade: 3}

    ])
  }
}