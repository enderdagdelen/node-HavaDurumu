

const yer = document.getElementById('yer').value;

const submit = document.getElementById('tus');

submit.addEventListener('click',(e)=>{
    const yer = document.getElementById('yer').value;
    
    // normal kod
    //const url = 'http://localhost:3000/weather?address='+yer;

    //heroku için yapılandırılan kod
    const url = '/weather?address='+yer;

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log(data);

            if(data.error){
                document.getElementById('sonuclar').innerHTML=data.error;
            }else{
            document.getElementById('sonuclar').innerHTML=`
            <h2 class="text-center">Hava Durumu</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Bölge:  ${data.data.Bolge}</li>
                <li class="list-group-item">Sıcaklık:  ${data.data.Sicaklik}</li>
                <li class="list-group-item">Hissedilen:  ${data.data.HissedilenSicaklik}</li>
                <li class="list-group-item">Gözlem Saati:  ${data.data.EnSonGozlemSaati}</li>
                <li class="list-group-item">Aciklama:  ${data.data.HavaAciklamasi}</li>
                <li class="list-group-item">Yağış:  ${data.data.YagisIhtimali}</li>
                <li class="list-group-item">New:  ${data.data.Nem}</a>
                <li class="list-group-item">Rüzgar Hızı:  ${data.data.RuzgarHizi}</li>
                <li class="list-group-item">Sıcaklık:  ${data.data.RuzgarYonu}</li>
            </ul>
            
            `;
            }
        })
    });

    console.log(url);

    e.preventDefault();
});



/*

fetch(url).then((response)=>{
    response.json().then((data)=>{

        console.log(`
        <h3>Ülke:</h3>${data.ülke}
        <h3>Bölge:</h3>${data.bölge}
        <h3>Yer:</h3>${data.yer}
        <h3>Sıcaklık:</h3>${data.Sıcaklık}
        `);
        console.log(data.error);

        if (data.error) {
            sonuclar.innerHTML=`
                <div class="alert alert-warning text-center" role="alert">
                    ${data.error}
                </div>
            `;
        } else {
            sonuclar.innerHTML=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Ülke:${data.ülke}</li>
                <li class="list-group-item">Bölge:${data.bölge}</li>
                <li class="list-group-item">Yerleşim:${data.yer}</li>
                <li class="list-group-item">Sıcaklık:${data.Sıcaklık}</li>
            </ul>
            `
            ;
        }
    });
});

*/