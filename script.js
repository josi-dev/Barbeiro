let botaoMenu = document.getElementById("menu-icon")
let fotos = [...document.querySelectorAll("#galeria-fotos div")]
let menu = [...document.querySelectorAll("#inicio article")]
let dialog = document.querySelector("#galeria dialog")






//mostrar o menu superio quando clicar no icone menu
function efeitoMenu() {
    menu[0].classList.toggle("menu")
}

botaoMenu.addEventListener("click", efeitoMenu)





//redirecionar para o link quando clicar no botao do whatsapp
function whatsappLink() {
    setTimeout(location.href = "https://wa.me/5586988355529?text=Olá%20vocês%20estão%20atendendo", 3000)
}




//colocar a image no dialog quando clicar nela
fotos.map((ele,pos) => {

    ele.addEventListener("click", (evt) => {
    
    
    dialog.setAttribute("open","")//abri o dialog
    
        
    let styleDialog = window.getComputedStyle(evt.target)//pega o estilo do elemento
    
    let valor = styleDialog.getPropertyValue('background-image')//pega o valor css background-image do elemento
    
    
    dialog.style.backgroundImage = valor //adiciona no elemento dialog o valor do background image clicado
    
        console.log(valor)
    })
    
})
 

//fechar dialog
function fecharDialog() {
    dialog.removeAttribute("open")
}