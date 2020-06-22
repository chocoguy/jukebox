import anime from './node_modules/animejs/lib/anime.es.js'


function musicBar(){

function randcolor(){    
let colors = ['rgb(255,211,136)','rgb(255,135,135)','rgb(255,251,154)','rgb(212,136,255)','rgb(132,255,209)','rgb(126,169,255)','rgb(255,125,233)']
return colors[Math.floor(Math.random() * 6)]
}

anime({
    targets: 'div.spec',
    background: randcolor(),
     width: function() {
        return anime.random(1200, 1600)
     }, 
    easing: 'easeInOutQuad',
    direction: 'linear',
    duration: 350,
    complete: musicBar,
  })
}

musicBar()


 $("body").css("overflow", "hidden");
$(document).ready(
    function(){
    var aud = $('audio')[0];
    $('.play-pause').on('click', function(){
    if (aud.paused) {
      aud.play();
      $('.play-pause').removeClass('fa-play');
      $('.play-pause').addClass('fa-pause');
    }
    else {
      aud.pause();
      $('.play-pause').removeClass('fa-pause');
      $('.play-pause').addClass('fa-play');
    }
    
  })


  
  $('.mobamba').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/moBamba.mp3';

  })

    $('.godsplan').on('click', function(){
        aud.src = 'https://storage.googleapis.com/decahex-main/plan.mp3';

    })

    $('.slobonmyknob').on('click', function(){
            aud.src = 'https://storage.googleapis.com/decahex-main/slobKnob.mp3';
       
    })

     $('.windows7').on('click', function(){
            aud.src = 'https://storage.googleapis.com/decahex-main/win7.mp3';
        
     })

     $('.nighttape').on('click', function(){
        aud.src = 'https://storage.googleapis.com/decahex-main/nightside.mp3';
    
 })
 $('.aogashima').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/aogashima.mp3';

})
$('.inthemoon').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/inthemoon.mp3';

})
$('.magic').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/magic.mp3';

})
$('.pixelbomb').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/pixelbomb.mp3';

})
$('.sakura').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/sakura.mp3';

})
$('.staypure').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/staypure.mp3';

})
$('.baecityrollaz').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/baecityrollaz.mp3';

})
$('.destiny').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/destiny.mp3';

})
$('.tokyobounce').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/tokyobounce.mp3';

})
$('.usagifunk').on('click', function(){
    aud.src = 'https://storage.googleapis.com/decahex-main/usagifunk.mp3';

})




    aud.ontimeupdate = function(){
      $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
      let rounded = Math.floor(aud.duration)
      let rounded45 = Math.floor(rounded % 60)
      let rounded2 = Math.floor(aud.currentTime)
      let rounded46 = Math.floor(rounded2 % 60)
      let maxLength = Math.max(rounded)
      let maxLength2 = Math.max(rounded2)
      if(rounded46 < 10){
          rounded46 = '0'+rounded46
      }
      if(rounded45 < 10){
          rounded45 = '0'+rounded45
      }
      if(maxLength2 === maxLength){
          setTimeout(function(){
            aud.pause();
            $('.play-pause').removeClass('fa-pause');
            $('.play-pause').addClass('fa-play');
          }, 1000)
      }
        //?console.log(Math.floor(rounded / 60)+":"+rounded45)
        //?console.log(Math.floor(rounded2 / 60)+":"+rounded46)
        document.querySelector('.song-length').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-2').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-2').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-3').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-3').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-4').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-4').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-5').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-5').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-6').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-6').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-7').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-7').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-8').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-8').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-9').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-9').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-10').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-10').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-11').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-11').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-12').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-12').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-13').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-13').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-14').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-14').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
        document.querySelector('.song-length-15').innerHTML = `<p>${Math.floor(rounded / 60)+":"+rounded45}</p>`
        document.querySelector('.current-time-15').innerHTML = `<p>${Math.floor(rounded2 / 60)+":"+rounded46}</p>`
      //console.log(Math.floor(rounded / 60)+":"+rounded45)
      //console.log(Math.floor(rounded2 / 60)+":"+rounded46)
    }


  })




  //SWITCH MUSIC

  let tabItems = document.querySelectorAll('.tab-item');
  let tabContentItems = document.querySelectorAll('.tab-content-item');
  
  function selectItem(e){
      removeColor()
      removeShow()
      this.classList.add('color')
      console.log(this.item)
      let tabContentItem = document.querySelector(`#${this.id}-content`)
      tabContentItem.classList.add('show');
  }
  
  
  
  
  function removeShow() {
      tabContentItems.forEach(item => item.classList.remove('show'));
  }
  
  function removeColor() {
      tabItems.forEach(item => item.classList.remove('color'));
  }
  
  tabItems.forEach(item => item.addEventListener('click', selectItem));