import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Cliente.createMany([
        {cpf: '1234567890', email: 'email1@exemplo.com', nome:'Nome Fictício 1', telefone: 439123456432},
        {cpf: '2345678901', email: 'email2@exemplo.com', nome:'Nome Fictício 2', telefone: 439123456433},
        {cpf: '3456789012', email: 'email3@exemplo.com', nome:'Nome Fictício 3', telefone: 439123456434},
        {cpf: '4567890123', email: 'email4@exemplo.com', nome:'Nome Fictício 4', telefone: 439123456435},
        {cpf: '5678901234', email: 'email5@exemplo.com', nome:'Nome Fictício 5', telefone: 439123456436},
        {cpf: '6789012345', email: 'email6@exemplo.com', nome:'Nome Fictício 6', telefone: 439123456437},
        {cpf: '7890123456', email: 'email7@exemplo.com', nome:'Nome Fictício 7', telefone: 439123456438},
        {cpf: '8901234567', email: 'email8@exemplo.com', nome:'Nome Fictício 8', telefone: 439123456439},
        {cpf: '9012345678', email: 'email9@exemplo.com', nome:'Nome Fictício 9', telefone: 439123456440},
        {cpf: '0123456789', email: 'email10@exemplo.com', nome:'Nome Fictício 10', telefone: 439123456441}
    ])
  }
}