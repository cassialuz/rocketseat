function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    // pegar a tag imagem

    const img = document.querySelector('#profile img')

    // substituir a imagem
    if(html.classList.contains("light")){
        // se estiver no light mode, adc a imagem sol
        img.setAttribute("src","./assets/avatar-light.png")
    } else {
        img.setAttribute("src","./assets/avatar.png")
    }

    
    // código que funciona igual a função togglemode
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //    html.classList.add('light')
    //}

    

    

    
    
    // se estiver sem o light mode, manter a imagem (lua) que é o padrão
}