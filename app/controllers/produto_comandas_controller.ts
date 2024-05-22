import type { HttpContext } from '@adonisjs/core/http'

import ProdutoComanda from "#models/produto_comanda"

export default class ProdutoComandasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/ProdutoComandas?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutoComanda.query().paginate(page, perPage)
        // return await ProdutoComanda.query()
    };


    async show({params}: HttpContext) {
        return await ProdutoComanda.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["produtoId","comandaId","quantidade"])
        return await ProdutoComanda.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const produtoComanda =  await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(["produtoId","comandaId","quantidade"])
        
        produtoComanda.merge(dados)
    
        return await produtoComanda.save()
    };


    async destroy({params}: HttpContext) {

        const produtoComanda =  await ProdutoComanda.findOrFail(params.id)

        await produtoComanda.delete()

        return {msg:'registro deletado com sucesso', ProdutoComanda}
    };
}