var log = function log(data) {
  "use strict";
  window.console.log(data);
};

var calculatrice = function calculatrice(){

  "use strict";
  console.log("ready !!!");

  var btn, saisie, add, sub, mult, div;

  btn = document.getElementById("btn");
  saisie = document.getElementById("ma_saisie");

  log(btn);
  log(saisie);

  //btn.onclick = function click(){
    //log("click 1 !!!");
  // };-->

  function gererClicks(){
    log("click 2 !!!");
    log(saisie.value);
    var res = add();
    log(res);
  }
if (typeof(a,b="number"))

{


    function add(a,b){
      return a + b;
    }

}



  btn.onclick = gererClicks;
  //btn.addEventsListener("click",gererClicks);

};
