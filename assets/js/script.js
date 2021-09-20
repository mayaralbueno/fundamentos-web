let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeok = false
let emailok = false
let assuntook = false
let mapa = document.querySelector('#mapa')

nome.style.width = '30%'
email.style.width = '30%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'nome inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'nome válido'
    txtNome.style.color = ' green'
    nomeok = true
  }


}
function validaEmail() {
  let txtEmail = document.querySelectorAll('#txtemail')
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
    txtEmail.innerHTML = 'E-mail invalido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailok = true
  }
}
function valisaAssunto() {
  let txtAssunto = document.querySelectorAll('#txtAssunto')
  if (assunto.value.length < 100) {
    txtAssunto.innerHTML = 'Texto é muito grande,digite no máximon 100 caracteres'
    txtAssunto.style.Color = 'red'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntook = true

  }
}
function enviar() {
  if (nomeok == true && emailok == true && assuntook == true) {
    alert('formulario envuado com sucesso')
  } else {
    alert('preencha o formulario corretamente antes de enviar...')
  }

}
function mapazoom() {
mapa.style.width ='800px'
mapa.style.height ='600px'
}
function mapaNormal(){
  mapa.style.width ='400px'
  mapa.style.height ='250px'
}

