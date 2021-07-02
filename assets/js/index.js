function mudarCor(){
    let body = document.getElementById('bodyColor')
    let cores = ['yellow','green','black','red','blue','orange','magenta','pink','purple','gray','violet','aqua']

    let quantidadeCores = cores.length
    let coresAleatoria = Math.floor( Math.random() * quantidadeCores)
    body.style.background = cores[coresAleatoria]
}