const havaSonuc = require('./koordinat.js');
const hava = require('./hava.js');


havaSonuc(arananyer,(error,data)=>{
    if(error){
        console.log(error);
    }else{

        hava(data.lat,data.long,data.yer,(error,data2)=>{
            if(error){
                console.log(error);
            }else{
                /*
                console.log(`
                Bölge: ${data.Bolge}
                En Son Ölçüm Saati: ${data.EnSonGozlemSaati}
                Sıcaklık: ${data.Sicaklik}
                Hissedilen Sıcaklık: ${data.HissedilenSicaklik}
                Açıklama: ${data.HavaAciklamasi}
                Rüzgar Hızı: ${data.RuzgarHizi}
                Rüzgar Yönü: ${data.RuzgarYonu}
                Basınç: ${data.Basinc}
                Nispi Nem: ${data.YagisIhtimali}
                `);
                */
               console.log(data2);


            }
        });
    }
});

const lat = 39.86667;//39.86667
const long = 32.86667;//32.86667


module.exports=havaSonuc;