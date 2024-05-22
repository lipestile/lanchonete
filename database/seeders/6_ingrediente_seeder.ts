
import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Ingrediente.createMany([
      // Ingredientes já listados
  {nome: 'Farinha de trigo', descricao: 'Farinha de trigo de alta qualidade'},
  {nome: 'Água', descricao: 'Água filtrada'},
  {nome: 'Fermento', descricao: 'Fermento biológico para pães'},
  {nome: 'Sal', descricao: 'Sal refinado'},
  {nome: 'Gergelim', descricao: 'Sementes de gergelim'},
  {nome: 'Presunto', descricao: 'Fatias de presunto'},
  {nome: 'Queijo', descricao: 'Fatias de queijo'},
  {nome: 'Alface', descricao: 'Folhas de alface frescas'},
  {nome: 'Maionese', descricao: 'Maionese cremosa'},
  {nome: 'Molho de tomate', descricao: 'Molho de tomate caseiro'},
  {nome: 'Queijo mussarela', descricao: 'Queijo mussarela ralado'},
  {nome: 'Manjericão', descricao: 'Folhas de manjericão frescas'},
  {nome: 'Chocolate em pó', descricao: 'Chocolate em pó sem açúcar'},
  {nome: 'Leite', descricao: 'Leite integral'},
  {nome: 'Laranja', descricao: 'Suco de laranja natural'},
  // Novos ingredientes
  {nome: 'Carne de hambúrguer', descricao: 'Carne moída para hambúrgueres'},
  {nome: 'Pão de hambúrguer', descricao: 'Pão de hambúrguer fresco'},
  {nome: 'Café', descricao: 'Café moído na hora'},
  {nome: 'Açúcar', descricao: 'Açúcar refinado'},
  {nome: 'Bacon', descricao: 'Fatias de bacon'},
  {nome: 'Tomate', descricao: 'Tomates frescos'},
  {nome: 'Picles', descricao: 'Picles em conserva'},
  {nome: 'Ketchup', descricao: 'Molho de ketchup'},
  {nome: 'Mostarda', descricao: 'Molho de mostarda'},
  {nome: 'Maionese', descricao: 'Molho de maionese'},
  {nome: 'Ovo', descricao: 'Ovos frescos'},
  {nome: 'Cebola', descricao: 'Cebolas frescas'},
  {nome: 'Alface', descricao: 'Folhas de alface frescas'},
  {nome: 'Queijo cheddar', descricao: 'Fatias de queijo cheddar'},
  {nome: 'Pão francês', descricao: 'Pão francês fresco'},
  {nome: 'Requeijão', descricao: 'Requeijão cremoso'},
  {nome: 'Presunto', descricao: 'Fatias de presunto'},
  {nome: 'Mortadela', descricao: 'Fatias de mortadela'},
  {nome: 'Peito de peru', descricao: 'Fatias de peito de peru'},
  {nome: 'Frango desfiado', descricao: 'Frango cozido e desfiado'},
  {nome: 'Carne moída', descricao: 'Carne moída cozida'},
  {nome: 'Salsicha', descricao: 'Salsichas para hot dog'},
  {nome: 'Molho de pimenta', descricao: 'Molho de pimenta'},
  {nome: 'Batata palha', descricao: 'Batata palha para lanches'}
    ])
  }
}