const app = require('./app')


//Server
const port = app.get('port');
app.listen(port, ()=>{
        console.log("Server running on port ", port)
})