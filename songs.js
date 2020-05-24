//const
    sng=[
'breakeven.mp3',
'champion.mp3',
'clarity.mp3',
'fireflies.mp3',
'hero.mp3',
"i'll_be_waiting.mp3",
'long_live_this_love.mp3',
'inferno.mp3'
];
artist=[
    elina=[sng[1],sng[2]],
    the_script=[sng[0]],
    owl_city=[sng[3]]
];
lngth=sng.length;
sn=document.getElementById('sngs');
nm=document.getElementById('sng_nm');
x=document.getElementById('sng_tst');
i=0;
lct='C:\Users\Eyan\Music';

function songs() {
	//xmw=document.getElementById('vida').getAttribute(outerHeight)
    //document.getElementById('overlay').setAttribute('height',xmw)
    //document.write(sng)

    /*for (i=0;i<=sng.length-1;i++) {
        sn.innerHTML=sng[i]+'<br>'
    }*/
    rndm();
    //n = Math.random()
    // document.write(sng[2])

    /*	document.createElement(element);
    element.appendChild(Sng);*/
}
function all_songs() {
    //sn.innerText=sng;
    sn.innerHTML=sng.toString()+'<br>';
    /*for(i = 0; i < lngth; i++){
        sn.innerHTML=sng[i]+'\n';
    }*/
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
    song=song.toLowerCase();
    for (i = 0; i < lngth; i++) {
        if (sng[i] == song) {
            nm.innerText = song;

            x.pause();
            x.setAttribute('src', song);
            x.load();
            x.play();
            break;
        }
        else {
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
function rndm(){
    n=Math.floor(Math.random()*lngth);//random no. 0 to 5
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
    for(k=0;k<artist.length;k++){
        if (artist[i] == name) {
            nm.innerHTML = 'song ' + i +name;
            // break;
        }
    }
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
    }
    */