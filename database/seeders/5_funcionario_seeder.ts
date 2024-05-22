import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Funcionario.createMany([
        {nome: "Roberto", cpf: "12345678910", endereco: "Rua Castro 225", sexo: "M", telefone: 234382900, cargoId: 1},
        {nome: "Maria", cpf: "23456789101", endereco: "Avenida Brasil 100", sexo: "F", telefone: 345678910, cargoId: 2},
        {nome: "João", cpf: "34567891012", endereco: "Rua das Flores 50", sexo: "M", telefone: 456789101, cargoId: 3},
        {nome: "Ana", cpf: "45678910123", endereco: "Alameda dos Anjos 75", sexo: "F", telefone: 567891012, cargoId: 4},
        {nome: "Carlos", cpf: "56789101234", endereco: "Praça da Árvore 125", sexo: "M", telefone: 678910123, cargoId: 5},
        {nome: "Fernanda", cpf: "67891012345", endereco: "Rua do Sol 150", sexo: "F", telefone: 789101234, cargoId: 6},
        {nome: "Ricardo", cpf: "78910123456", endereco: "Avenida do Mar 175", sexo: "M", telefone: 891012345, cargoId: 7}
    ])
  }
}