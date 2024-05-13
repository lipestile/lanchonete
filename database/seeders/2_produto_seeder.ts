import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Produto.createMany([
      {nome:'Coca-cola lata', preco: 6.5, tamanho: '330 ml', tipoId: 1 },
      {nome:'Coca-cola 2L', preco: 6.5, tamanho: '2 l', tipoId: 1},
      {nome:'Coca-cola 600', preco: 6.5, tamanho: '600 ml', tipoId: 1},
      {nome:'Coca-cola Ks', preco: 6.5, tamanho: '290 ml', tipoId: 1},

      {nome:'Ket-chup', preco: 2.5, tamanho: '200 g', tipoId: 2},
      {nome:'Molho-verde', preco: 2.5, tamanho: '200 g', tipoId: 2},
      {nome:'Maionese', preco: 2.5, tamanho: '200 g', tipoId: 2},
      {nome:'Pimenta', preco: 2.5, tamanho: '200 g', tipoId: 2},

      {nome:'X-Bomba', preco: 15, tamanho: '1 kg', tipoId: 3},
      {nome:'X-Salada', preco: 15, tamanho: '1 kg', tipoId: 3},
      {nome:'X-Irmãos', preco: 25, tamanho: '2 kg', tipoId: 3},
      {nome:'X-Corbute', preco: 50, tamanho: '4 kg', tipoId: 3},

      {nome:'Batatas', preco: 7, tamanho: '600 g', tipoId: 4},
      {nome:'Bacon', preco: 7, tamanho: '600 g', tipoId: 4},
      {nome:'Frango', preco: 7, tamanho: '600 g', tipoId: 4},
      {nome:'Onion_rings', preco: 7, tamanho: '600 g', tipoId: 4},

      {nome:'Bolo', preco: 15, tamanho: '400 g', tipoId: 5},
      {nome:'Pudim', preco: 15, tamanho: '400 g', tipoId: 5},
      {nome:'Brouniew', preco: 15, tamanho: '400 g', tipoId: 5},
      {nome:'Paçoca', preco: 15, tamanho: '400 g', tipoId: 5},
      
      {nome:'Molho', preco: 8, tamanho: '700 g', tipoId: 6},
      {nome:'Paulista', preco: 8, tamanho: '700 g', tipoId: 6},
      {nome:'Chapa', preco: 8, tamanho: '700 g', tipoId: 6},
      {nome:'Dupla', preco: 8, tamanho: '700 g', tipoId: 6},
      
    ])

  }
}