"use strict";
function setUserMovements(callbackExit, callbackConfig){
    let ret = false;//false --- ningún callback se usó
    if (typeof(callbackExit) == "function"){
        document.querySelector(".icon-exit").addEventListener("click", callbackExit);
        ret = 0;//0 --- sólo se usó el de exit
    }
    if (typeof(callbackExit) == "function"){
        document.querySelector(".icon-cog").addEventListener("click", callbackConfig);
        ret = ret == 0 ? true : 1;//true --- se usaron ambos, 1 --- se usó sólo el de config
    }
    return ret;
}
(() => {
    let is_scrolled = false;
    let last_scrolled = false;//funciona como booleano al principio para evitar que se dispare el evento al refresh
    const header = document.querySelector("header");
    const max_height = header.offsetHeight/2;
    const curr_scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (curr_scroll <= max_height/2)
        header.className = "header";
    else {
        header.className = "header-scrolled";
        is_scrolled = true;
    }
    //actualizar los valores cuando window.resize
    window.addEventListener("scroll", () => {
        const px_scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (last_scrolled !== false){
            is_scrolled = px_scrolled >= max_height;
            if (!is_scrolled){
                is_scrolled = false;
                if (px_scrolled <= max_height && !(last_scrolled-px_scrolled <= 2))//si está cerca de la cima y está subiendo
                    header.className = "header animation-fade-in";
                else if (last_scrolled < px_scrolled && px_scrolled >= max_height/2)//si va bajando y se despega de la cima
                    header.className = "header animation-fade-in-down";
            } else {
                if (px_scrolled >= max_height){
                    is_scrolled = true;
                    if (last_scrolled < px_scrolled)//si baja
                        header.className = "opacity-0 visibility-hidden";
                    else if (!(last_scrolled-px_scrolled <= 2))//si sube
                        header.className = "header-scrolled";
                }
            }
        }
        last_scrolled = px_scrolled;
    });
})();
