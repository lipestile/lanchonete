import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Ingrediente.createMany{[
      {nome: 'Pão com gergilim'}
    ]}
  }
}