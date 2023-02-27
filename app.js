document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "1",
      img: "img/ 1.jpg"
    },
    {
      name: "2",
      img: "img/ 2.jpg"
    },
    {
      name: "3",
      img: "img/ 3.jpg"
    },
    {
      name: "4",
      img: "img/ 4.jpg"
    },
    {
      name: "5",
      img: "img/ 5.jpg"
    },
    {
      name: "6",
      img: "img/ 6.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  
  function creartablero() {
   
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

     
      carta.setAttribute("src", "images/reverso.png");
     
      carta.setattribute("data-id", i);
    
      carta.addEventListener("click", voltearcarta);
     
      cuadricula.appendchild(carta);
    }
  }
