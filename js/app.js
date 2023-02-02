var onScreenTime = 3000;
var maybe = false;
function getFetchData(){
    //debugger;
    fetch('https://yesno.wtf/api')
        .then(result => result.json())
        .then(data => {
            changeSceneToResult(data.image,data.answer);
            console.log("data", data);
        })
}
function checkForced(){
    var text = document.getElementById("main-input").value;
    var condition = "";

    if (text.includes("ye")) {
        console.log("force yes");
        condition = "yes";
      }
      else if (text.includes("öl")) {
        console.log("force no");
        condition = "no";
      }
      else if (text.includes("bilmiyorum")) {
        console.log("force maybe");
        condition = "maybe";
      }
      else {
        console.log("text contains no special word");
        condition = "";
      }  

    fetch(`https://yesno.wtf/api?force=${condition}`)
        .then(result => result.json())
        .then(data => {
            changeSceneToResult(data.image,data.answer);
            console.log("data", data);
        })
    }

//İlk kullanıldığında hata verdiği için arkadan fonksiyonu bir defa çağırıyoruz
//Sonuç sayfanın fonksiyonu
function changeSceneToResult(image, answer){
    document.getElementById("main-header").style.visibility = "hidden";
    document.getElementById("main-input").style.visibility = "hidden";
    document.getElementById("result-header").style.visibility = "visible";
    document.getElementById("result-header").innerHTML = answer;
    document.body.style.backgroundImage = `url(${image})`;
    setTimeout(() => {  changeBackToQuestion(); }, onScreenTime);
}
//Soru sayfasına dönüş fonksiyonu
function changeBackToQuestion(){
    document.getElementById("main-header").style.visibility = "visible";
    document.getElementById("main-input").style.visibility = "visible";
    document.getElementById("result-header").style.visibility = "hidden";
    document.getElementById("main-input").value = "";
    document.body.style.backgroundImage = "url(https://media.tenor.com/5sglUOGwcfYAAAAC/batman-thinking.gif)";
}    
//? tuşuna basılma
const input = document.addEventListener('keydown', (e) => {
    if (e.key == "?"){
        //debugger;
        console.log("question mark");
        checkForced();
    }
})

    /*
    document.getElementById("main-header").style.visibility = "hidden";
    document.getElementById("main-input").style.visibility = "hidden";
    document.getElementById("main-input").style.visibility = "hidden";
    document.getElementById("result-header").style.visibility = "visible"; 
    */


    //document.body.style.backgroundImage = "url(" + data.image + ")";
    //document.getElementById("result-header").innerHTML = data.answer;

    //bu çalışıyor:
    /*
    let cevap = null;
    et foto = null;
    fetch('https://yesno.wtf/api')
    .then(result => result.json())
    .then(data => {
        console.log("data",data);
        cevap = data.answer;
        foto = data.image;
    })
    

    */