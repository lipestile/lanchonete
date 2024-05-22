import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await FormaPagamento.createMany([
     {nome: "pix"},
     {nome: "Avista"},
     {nome: "debito"},
     {nome: "credito"}

    ])
  }
}