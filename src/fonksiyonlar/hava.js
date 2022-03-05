const request = require('request');

const apiKey = 'x';
const lat = 39.86667;//39.86667
const long = 32.86667;//32.86667


const hava = (lat,long,yer,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key='+apiKey+'&query='+lat+','+long;

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Hizmet Sağlayıcısına Bağlanılamadı, Bağlantınızı Kontrol Ediniz",undefined);
        }else if (response.body.success === false){
     
            callback(undefined,codeExp(response.body.error.code));
    
        }else{
            callback(undefined,{
                Bolge:yer,
                EnSonGozlemSaati:response.body.current.observation_time,
                Sicaklik:response.body.current.temperature,
                HissedilenSicaklik:response.body.current.feelslike,
                HavaAciklamasi:response.body.current.weather_descriptions[0],
                RuzgarHizi:response.body.current.wind_speed,
                RuzgarYonu:response.body.current.wind_dir,
                Basinc:response.body.current.pressure,
                YagisIhtimali:response.body.current.precip,
                Nem:response.body.current.humidity
            });
           
        }
    });
};



const codeExp=(code)=>{
    switch (code) {
        case 404:
            return("404:Kullanıcı Varolmayan Bir Kaynak Talep Etti");
        case 101:
            return("101:Geçersiz veya Yetki Dışı Bir Anahtar Kullanıldı");
        case 102:
            return("102:Atıl Kullanıcı");
        case 103:
            return("103:Kullanıcı Varolmayan Bir API Fonksiyonu Kullandı");
        case 104:
            return("104:Kullanım Sınırına Ulaşıldı");
        case 105:
            return("105:Kullanıcının Üyeliği Bu Sorguyu Kapsamıyor");
        case 601:
            return("601:Eksik yada Geçersiz Sorgulama.Lütfen Geçerli Arama Parametreleri Kullanın");
        case 602:
            return("602: Sonuç Yok");
        case 603:
            return("603:Tarihi, Geriye Dönük Sorgulama Bu Üyelik Tarafından Desteklenmiyor");
        case 604:
            return("604:Bulk Query Bu Üyelik Tarafından Desteklenmiyor");
        case 605:
            return("605:Geçersiz Dil Kullanımı");
        case 606:
            return("606:Geçersiz Birim Kullanımı");
        case 607:
            return("607:Geçersiz Aralık Kullanımı");
        case 608:
            return("608:Geçersiz Hava Tahmin Günleri");
        case 609:
            return("609:Geleceğe Yönelik Sorgulama Bu Üyelik Tipince Desteklenmiyor");
        case 611:
            return("611:Geçersiz Tarihi/Geriye Dönük Zaman Girilmesi");
        case 612:
            return("612:Geçersiz Tarihi/Geriye Dönük Zaman Aralığı Girilmesi");
        case 613:
            return("613:Tarihi/Geriye Dönük Sorgulamada Kullanılan Period Çok Uzun");
        case 614:
            return("614:Eksik Tarihi/Geriye Dönük Veri");
        case 615:
            return("615:Srogu İşlemi Başarısız Oldu");

        default:
            break;
    }
};

module.exports=hava;
