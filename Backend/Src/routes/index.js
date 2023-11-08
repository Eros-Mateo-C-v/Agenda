const {Router} = require('express')
const userRouter =  require ('./users.routes')
const areaRouter = require ('./area.routes')
const agendaRoutes = require ('./agenda.routes')

function routerApi(app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/users', userRouter)
    router.use('/Areas', areaRouter)
    router.use('/Agenda', agendaRoutes)


}

module.exports = routerApi