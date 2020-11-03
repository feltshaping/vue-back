const http=require('http')
let users=[
    {id:1,name:'zhufeng1'},
    {id:2,name:'zhufeng2'},
    {id:3,name:'sunxmaz'},
    {id:4,name:'sunxmaz1'},
    {id:4,name:'sunxmaz2'}



]
let server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    if(req.url==='/api/users'){
        res.end(JSON.stringify(users))
    }else{
        res.end('Not found')
    }
})
server.listen(3000,()=>{
    console.log('api start in 3000')
})