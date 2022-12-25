const  express = require("express");
const router=express.Router();
const studentcontroller=require("../controllers/studentcontroller");

router.get("/dashboard",studentcontroller.view);
router.get("/leaveForm",studentcontroller.Leave);
router.post("/leaveForm",studentcontroller.save);


router.get('',(req,res)=>{
    res.render('home');
});

module.exports=router;