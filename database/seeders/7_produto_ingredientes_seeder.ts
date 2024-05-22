
import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await ProdutoIngrediente.createMany([
        {produtoId: 1, ingredienteId:2 }
    ])
  }
}