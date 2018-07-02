var propiedadMouse = {
    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure"),
    mouseX: 0,
    mouseY: 0,
}

var metodosMouse = {
    inicioMouse: function() {
        propiedadMouse.zona.addEventListener("mousemove", metodosMouse.movimientoMouse);

        for(let i = 0; i < propiedadMouse.figuras.length; i++) {
            propiedadMouse.figuras[i].innerHTML = "<img src='img/pic1" + (i+1) + ".png'/>";
            propiedadMouse.figuras[i].style.zIndex = -i;
        }

        // Se pone un timeout porque sino daría altura cero por los tiempos de carga
        setTimeout(function(){
            propiedadMouse.zona.style.height = propiedadMouse.figuras[0].childNodes[0].height + "px";
        }, 100);
        
    },

    movimientoMouse: function(mouse) {
        //console.log(mouse.offsetX, mouse.offsetY);

        propiedadMouse.mouseX = mouse.offsetX;
        propiedadMouse.mouseY = mouse.offsetY;

        for(let i = 0; i < propiedadMouse.figuras.length; i++) {
            propiedadMouse.figuras[i].style.left = -propiedadMouse.mouseX/(i*100+50) + "%";
            propiedadMouse.figuras[i].style.top = -propiedadMouse.mouseY/(i*100+50) + "%";
        }
    }
}

metodosMouse.inicioMouse();