var express = require('express');
var router = express.Router();


let PyModel = require("node-py-skmodel");

/* GET home page. */
router.get('/', function(req, res, next) {

  


  async function main(){
    let mymodel = new PyModel("assets/simpleModel.pkl");
    
    
    let data = new Map([
        ['x1', [110,12,-4953,453,23,-56]],
        ['x2', [1334.345,-23,-45,45,45,-23]]
    ]);


    
    let res = await mymodel.predict(data);
    console.log(res);
    // let predictions = await JSON.parse(res);
    // return predictions;
  }

  let predictions = main();

  res.render('index', { title: 'Express', res: predictions});
});

module.exports = router;
