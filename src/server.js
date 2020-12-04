const { request } = require('express');
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const geoCode = require('../src/fonksiyonlar/koordinat.js');
const hava = require('../src/fonksiyonlar/hava.js');



const havaApp = express();

//Static Dosyalar için yazılan kodlar                        -------Statik Başlangıç-------
const staticFiles=path.join(__dirname,'../public');
havaApp.use(express.static(staticFiles));
//                                                           -------Statik Son-------      

// header bars için gerekli kodlar                           -------hbs Başlangıç
havaApp.set('view engine','hbs');
//                                                           -------hbs Son-------  

// header bars views için gerekli kodlar                      -------hbs views Başlangıç
const hbsFiles = path.join(__dirname,'../templates/views');
havaApp.set('views',hbsFiles);
//                                                           -------hbs views Son-------      

//hbs partials için yazılan kodlar                           -------hbs partials------
const hbsPartialsFiles=path.join(__dirname,'../templates/partials');
hbs.registerPartials(hbsPartialsFiles);
//                                                           -------hbs partials Son-------      



//Dinamik Sayfalar                  ------DİNAMİK-----
havaApp.get('',(req,res)=>{
    res.render('index',{
        kurucu:'Ender DAĞDELEN',
        sirket:'dagdelenWEB'
    });
});

havaApp.get('/help',(req,res)=>{
    res.render('help',{
        sayfa:'help',
        yapan:'Ender'
    })
});

havaApp.get('/contact',(req,res)=>{
    res.render('contact',{
        sayfa:'contact',
        yapan:'Ender'
    });
});


havaApp.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:"Bir Yer Adı Giriniz"});
    }

    geoCode(req.query.address,(error,response)=>{
        if(error){
            return res.send({error:error})
        }

        hava(response.lat,response.long,response.yer,(error,data)=>{
            if(error){
                return res.send({error:error});
            }

            res.send({data});
        });
    });
   
    
   
});
//Dinamik Sayfalar                  ------DİNAMİK-----


havaApp.listen(3000,()=>{
    console.log("Hava Server 3000'de Yayında");
});
