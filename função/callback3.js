//exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
} 

document.getElementsByTagName('body')[0].onscroll = function (e) {
    console.log('O evento ocorreu!')
} 
