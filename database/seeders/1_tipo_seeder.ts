import Tipo from '#models/tipo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Tipo.createMany([
      {nome: 'Bebidas'},
      {nome: 'Molhos'},
      {nome: 'Hamburgues'},
      {nome: 'Porções'},
      {nome: 'Sobremesas'},
      {nome: 'Hot_Dog'}

    ])
  }
}