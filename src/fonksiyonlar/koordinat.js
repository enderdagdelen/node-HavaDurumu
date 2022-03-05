const request = require('request');

const api = 'x';
//const adress = 'Ankara';
//url is limited for returning single solution

const geoCode = (adres,callback)=>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adres)+'.json?limit=1&access_token='+api;

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Servis Sağlayıcısına Bağlanılamadı",undefined);
        }else if(response.body.message==='Not Found'){
            callback(undefined,"Aradığınız Adrese Ait Bir Koordinat Bulunamadı.Lütfen Adresi Tekrar Kontrol Edin");
        }else if(response.body.message==="Not Authorized - Invalid Token"){
            callback(undefined,"Geçersiz veya Yetki Dışı API Anahtarı");
        }else{
            callback(undefined,{
                yer:response.body.features[0].place_name,
                long:response.body.features[0].center[0],
                lat:response.body.features[0].center[1]
            });
        }
    });
    
}

module.exports=geoCode;

