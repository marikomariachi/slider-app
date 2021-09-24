var models =[
    {   
        name:'bmw 418d',
        img:'img/bmw.jpg',
        link:'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2016-model-bmw-418-benzin-otomatik-standart-boyasiz-948359775/detay'
    },
    {   
        name:'maxda cx-3',
        img:'img/mazda.jpg',
        link:'https://www.sahibinden.com/ilan/vasita-arazi-suv-pickup-mazda-2018-mazda-cx-3-1.5-sky-d-power-16.000-km-hatasiz-956695409/detay'
    },
    {   
        name:'volvo s60',
        img:'img/volvo.jpg',
        link:'https://www.sahibinden.com/ilan/vasita-otomobil-volvo-boyasizz-2015-s60-koltuk-isitma-ici-bej-tr-de-tek-opsiyonlar-957603359/detay'
    },
    {   
        name:'skoda superb',
        img:'img/skoda.jpg',
        link:'https://www.sahibinden.com/ilan/vasita-otomobil-skoda-2021-cam-tavan-sifir-km-skoda-superb-1.5-tsi-dsg-150-bg-premium-957625649/detay'
    },
    {   
        name:'honda civic',
        img:'img/honda.jpg',
        link:'https://www.sahibinden.com/ilan/vasita-otomobil-honda-2018-model-garantili-servis-bakimli-rs-30dk-da-kredi-imkani-957303631/detay'
    }
    
]

var index = 2;
var slideCount = models.length;
var settings={
    duration:'2000',
    random: false
}
var interval;
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
index--;
showSlide(index);
console.log(index)
})
   

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index)
    console.log(index)
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings); 
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){

        if(settings.random){
            //random index
            do {
                index =Math.floor( Math.random()*slideCount)
            } while (index==prev)
            prev=index;
            
        }else{
            //artan index
            if(slideCount==index+1){
                index=-1;
            }
            showSlide(index)
            console.log(index)
            index++;
        }
        
        showSlide(index)

    },settings.duration)


}



function showSlide(i){
index = i;
if(i<0){
   index = slideCount-1;
}
if(i>=slideCount){
    index=0
}
if(i<0){
    index=4
}
document.querySelector('.card-title').textContent = models[index].name
document.querySelector('.card-img-top').setAttribute('src',models[index].img)
document.querySelector('.card-link').setAttribute('href',models[index].link)
}


