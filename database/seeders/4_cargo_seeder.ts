import Cargo from '#models/cargo'

import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Cargo.createMany([
        {nome: 'Atendente'},
        {nome: 'Cozinheiro'},
        {nome: 'Gerente'},
        {nome: 'Caixa'},
        {nome: 'Garçom'},
        {nome: 'Auxiliar de Cozinha'},
        {nome: 'Faxineiro'}
    ])
  }
}