const fs = require('fs')
const { join } = require('path')
const filePath = join(__dirname, 'users.json')
const getUsers =() => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []
    try {
        return JSON.parse(data)
    } catch (error) {
        return[]
    }
}
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))
const userRoute = (app) => {
    app.route('/users/:id')
        .get((req, res) => {
            const users = getUsers()
            res.send({ users })
        })    
        //Criação de Usuario...
        .post((req, res) => {
            const users = getUsers()
            users.push(req,body)
            saveUser(users)
            res.status(201).send('OK')
        })
        //Alterando informaões de usuario
        .put((req, res) =>{
            constusers = getUsers()
            saveUser(users.map(users => {
                if(userRoute.id === req.params.id){
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return user
            }))
            res.status(200).send('OK')
        })
        //Deletando o Usuário
        .delete((req, res)=> {
            const users = getUsers()
            saveUser(users.filter(user => user.id !== req.params.id))
            res.status(200).send('OK')
        })
} 
module.exports = userRoute