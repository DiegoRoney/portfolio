//

//$(window).scroll(function() {
  //  var scroll = $(window).scrollTop();
    //  if (scroll >= 40) {               // se rolar 40px ativa o evento
      //  $("#menu").addClass("ativo");    //coloca a classe "ativo" no id=menu
      //} else {
        //$("#menu").removeClass("ativo"); //se for menor que 40px retira a classe "ativo" do id=menu
      //}
   // });

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
const buttonElement = document.getElementById("up");
buttonElement.onclick = handleScroll;
 
