//const

sng = [
    'alone pt 2.mp3',
    'angel of darkness.mp3',
    'breakeven.mp3',
    'champion.mp3',
    'clarity.mp3',
    'fight for you.mp3',
    'fireflies.mp3',
    'forever young.mp3',
    'hero.mp3',
    "i'll be waiting.mp3",
    'inferno.mp3',
    'long live this love.mp3',
    'my_demons.mp3',
    'on my way.mp3',
    'superheroes.mp3',
    'sweet but psycho.mp3',
    'this song is about you.mp3'
];
sgn = []
artist = [
    elina = [sng[1], sng[2]],
    the_script = [sng[0]],
    owl_city = [sng[3]]
];
lngth = sng.length;
sn = document.getElementById('sngs');
nm = document.getElementById('sng_nm');
x = document.getElementById('sng_tst');
plays = document.getElementById('play');
resumes = document.getElementById('pause');
nxt = document.getElementById('nxt');
prv = document.getElementById('prv');
i = 0;
lct = 'C:\Users\Eyan\Music';
//creation and inplementations for next and prev songs
list = [];
krati = [];
krati = sng;
krat1 = document.getElementById('krat1');
krat = document.getElementById('krat');
krt = document.getElementById('krt');
nekt=0
p=0
ping=0
function start() {
    //play('inferno.mp3');
    create();
    play(krati[2])

}
function chk() {
    if(x.onplaying=true){swap(plays,resumes)}
    else{}

}
/*put timer for 3s to check if song is ended
dont forget about it
timer here:

if(x.onended=true){nextp()}
    else{}
*/
chk()
function songs() {
    /*//xmw=document.getElementById('vida').getAttribute(outerHeight)
    //document.getElementById('overlay').setAttribute('height',xmw)
    //document.write(sng)
    for (i=0;i<=sng.length-1;i++) {
        sn.innerHTML=sng[i]+'<br>'
    }*/
    rndm();
    /* //n = Math.random()
     // document.write(sng[2])
   /*	document.createElement(element);
     element.appendChild(Sng);*/
}

function all_songs() {
    //sn.innerText=sng;
    /*  sn.innerHTML=sng.toString()+'<br>';*/
    for (i = 0; i < lngth; i++) {
        son = sng[i]
        lc = son.search('.mp3')
        sgn.push(son.slice(0, lc))
        //sn.innerHTML=sng[i]+'\n';
        sn.innerHTML = son.slice(0, lc) + '<br>'
    }
    //sn.innerHTML=sgn.toString()+'<br>'+'\n fkg';
}

function chang() {
    usr = document.getElementById('usrs').value;
    usr = usr.toLowerCase();
    //lct=C:\Users\Eyan\Music
    choice = usr + '.mp3';
    //nm.innerHTML=choice;
    play(choice);
}
function play(song) {
     song = song.toLowerCase();
    for (i = 0; i < lngth; i++) {
        if (sng[i] == song) {
            /*refine(song);
            nm.innerText = song;
*/
            x.pause();
            x.setAttribute('src', song);
            //x.load();
            x.play();
            refine(song, nm)
            break;
        } else {
            nm.innerText = 'Not found Try something else';
            getArtst(song);
        }
        /*else{//(sng[i]!=choice && i<lngth)
        i++;*/
    }
    /*   else{
           nm.innerText='song not here'
       }
}
   /*  usrs=document.getElementById('usr').Value.toLowerCase()
   document.write(usrs)
   if(usrs==null){
       prompt('cant be null')
   }
  find(usrs)/*/
    //var usr=document.getIn
}
function rndm() {
    n = Math.floor(Math.random() * lngth);//random no. 0 to 5
    play(sng[n])
    /*    nm.innerHTML=sng[n];
    THIS WORKS WELL
    smg='CHAMPION.mp3'

    if(sng[n]==smg.toLowerCase(){
    nm.innerHTML=smg.toLowerCase()

        x.pause();
        x.setAttribute('src',sng[n]);
        x.load();
        x.play();*/
    // x.onended=rndm()
}
function getArtst(name) {
    for (k = 0; k < artist.length; k++) {
        if (artist[i] == name) {
            nm.innerHTML = 'song ' + i + name;
            // break;
        }
    }
}
function refine(song, plc) {
    lc = song.search('.mp3');
    plc.innerHTML = song.slice(0, lc)
}
/*
    function find(usrs){
        if (usrs==for(i=0;i<sng.length();i++){sng[i]}){
            nm.innerHTML=sng[usrs]
            var x=document.getElementById('sng_tst')
            x.pause()
            x.setAttribute('src',sng[usrs])
            x.load()
            x.play()
        }
    }*/

//wongs.js
function create() {
    plays.style.display = 'block';
    krtLn = krati.length + ':' + krati;
    krat.innerHTML = krtLn;
    for (i; i <= krtLn; i++) {
        innrkrt = krati.length;
        pick = Math.floor(Math.random() * innrkrt);
        list.push(krati.pop(pick))
    }
   // nwlst=krati.push(krati[0],[krati.length])
  //  nwfst=krati.push(krati.length,0)
   // krat1.innerHTML = krati.length + 'for krati' + '/n \n' + list.length + 'for list'+'last0'+nwlst+'first0'+nwfst
    //nxt.innerHTML='nekt='+nekt;
    krt.innerHTML=krati


}

function ply() {
    x.play();
    swap(plays, resumes)
}/*plays.style.display='none';
    resumes.style.display='block';*/
function pause() {
    x.pause();
    swap(resumes, plays);
} /*resumes.style.display='none';
    plays.style.display='block';*/
function nextp() {
    gtA()
    if(p==0){
        next();
    }
    else if(p==1){
        p=0
        krati.reverse();
        next()
    }

}
function next()   {

    //krati.push(krati[ping-1])
    krati.push(krati[0])
    krati.reverse()
    brb=krat.innerHTML=krati
    krati.pop()
    brb1=krat1.innerHTML=krati
    krati.reverse()
    //krati=krati.slice(ping,krati.length)
    nekt=ping
    //nxt.innerHTML='nekt='+nekt;
    brb2=nxt.innerHTML=nxt.innerHTML='nekt='+nekt+'|||||||||'+krati;
    /*//prv=brb+'||||||||||||||||||'+brb1+'||||||||||||||||||'+brb2

    if(nekt>krati.length){
        nekt=0
        play(krati[nekt])
    }
    else {
        play(krati[nekt])
    }*/
    play(krati[nekt])
}
function prev() {
    gtA()
    if(p==1){
        next();
    }
    else if(p==0){
        p=1
        krati.reverse();
        next()
    }

    /*
    nekt=ping-1
    nxt.innerHTML='nekt='+nekt;
    if(nekt<0){
        nekt=krati.length
        play(krati[nekt])
    }
    else {
        play(krati[nekt])
    }*/
}
function swap(x, y) {
    x.style.display = 'none';
    y.style.display = 'block';
}
function gtA() {
    curr=x.getAttribute('src')
    ping=krati.indexOf(curr);
    prv.innerHTML=ping;
    swap(plays, resumes)
}
function end() {
    if(x.onended){
        nextp()
    }
}
end()