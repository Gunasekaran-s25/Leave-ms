const mysql = require("mysql");

const con=mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("Connection success")
}); 
exports.view=(req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
       connection.query("select * from users",(err,rows)=>{
        connection.release();
        if(!err){
            
            res.render("dashboard",{rows});
        }
        else{
            console.log("error in render data"+err);

        }

       }) 
 });

   
 };
 exports.Leave=(req,res)=>{

    res.render("leaveForm" )}

    exports.save=(req,res)=>{
        con.getConnection((err,connection)=>{
            if(err) throw err
            const {leavetype,days,status}= req.body;
            console.log(leavetype,days,status);
           connection.query("insert into users (TYPE,DAYS,STATUS)values(?,?,?)",[leavetype,days,status],(err,rows)=>{
            connection.release();
            if(!err){
                 res.render("dashboard",{rows});
            }
            else{
                console.log("error in render data"+err);
    
            }
    
           }) 
     });
    

        res.render("leaveForm" )}
    
