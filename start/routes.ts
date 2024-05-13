/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import ComandasController from '#controllers/comandas_controller'
import FormaPagamentosController from '#controllers/forma_pagamentos_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import IngredientesController from '#controllers/ingredientes_controller'
import ProdutoComandasController from '#controllers/produto_comandas_controller'
import ProdutoIngredientesController from '#controllers/produto_ingredientes_controller'
import ProdutosController from '#controllers/produtos_controller'
import TiposController from '#controllers/tipos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/ingredientes', IngredientesController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/cargos', CargosController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/produtosingredientes', ProdutoIngredientesController).apiOnly()
router.resource('/formapagamento', FormaPagamentosController).apiOnly()
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/produtocomanda', ProdutoComandasController).apiOnly()
