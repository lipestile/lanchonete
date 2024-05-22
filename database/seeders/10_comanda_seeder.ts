import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Comanda.createMany([
     {mesa: "4A",funcionarioId: 4,clienteId: 3, formapagamentoId:1, valor: 30
     }

    ])
  }
}