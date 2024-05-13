import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 80).notNullable()
      table.string('cpf').notNullable()
      table.string('endereco').notNullable()
      table.decimal('telefone').notNullable()
      table.string('sexo', 1).notNullable()
      
      
      
      
      
      
      table.integer('cargo_id').unsigned().references('id').inTable('cargoss').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}