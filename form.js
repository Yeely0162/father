var content =["你将遇到","你这一生的贵人","我","你和我很像","我们或许会有很多共同的性格","相似的人生历程"
             ,"我们的生命互相交织","比任何人都亲密❤","能够给你","无与伦比的爱","你的爸爸","快叫爸爸！乖！"];
var i=0;
var time=3000;
var vm=new Vue({
    el:'#text',
    data:{
        content:"Hey！别来无恙",
        show:true,
        show1:false,
    },
    methods:{
    }
});
var interval=setInterval(function(){
        vm.$data.show=false;
        setTimeout(function (){
            vm.$data.show=true;
            vm.$data.content=content[i];
            i++;
            if(i===13){
                document.getElementsByClassName("box-picture")[0].style.display="inline-block"
                for(var j=0;j<=1;j++)
                document.getElementsByClassName("button")[j].style.display="inline-block"
                clearInterval(interval);
            }
        },1700)
    },time
)
function audio(a){
    // var ad= document.getElementById("Audio");
    var audio =document.createElement("Audio");
    if (a==1)
    audio.src="baba.mp3";
    else if(a==2)
    {
        audio.src="1.mp3";
        document.getElementsByClassName("box-picture")[1].style.display="none"
    }
    audio.play();
}