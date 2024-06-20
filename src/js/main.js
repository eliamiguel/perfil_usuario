
const usuario ={
    nome: document.getElementById('nomeCadastrado').textContent = 'Elias Felipe',
    email: document.getElementById('emailCadastrado').textContent = 'joaofelipe@gmail.com',
    telefone: document.getElementById('telefoneCadastrado').textContent = '(11) 1111 - 1111', 
   
 }

document.getElementById('nomeTitulo').textContent= usuario.nome
const getBanco = JSON.parse(localStorage.getItem('dbUsuario'))
const setBAnco = (dbUsuario) => localStorage.setItem('dbUsuario', JSON.stringify(dbUsuario))
 

// limpar 
const limparCampos =()=>{
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = ''; 
}
// validar Campos
const validarCampos = ()=> {
   const nome =  document.getElementById('nome').value.length;
   const email = document.getElementById('email').value.length ;
   const telefone =document.getElementById('telefone').value.length;
 
   if(nome <= 0 ){
    
        const msg = document.getElementById('nomeErro')
        msg.innerHTML= 'o nome obrigatorio'
        msg.classList.add('error')
        return

   }else{

        const msg = document.getElementById('nomeErro')
        msg.innerHTML= ''
        msg.classList.add('error')
   }

   if(email <= 0 ){

        const msg = document.getElementById('emailErro')
        msg.innerHTML= 'o campo email esta vazio ou incorreto'
        msg.classList.add('error')
        return

    }else{
        const msg = document.getElementById('emailErro')
        msg.innerHTML= ''
        msg.classList.remove('error')
    
   }

   if(telefone <= 0 ){

    const msg = document.getElementById('telefoneErro')
    msg.innerHTML= 'o campo telefone esta vazio ou incorreto'
    msg.classList.add('error')
     return

   }else{

    const msg = document.getElementById('telefoneErro')
    msg.innerHTML= ''
    msg.classList.remove('error')

   }

   return true

}

// salvar e editar

const editarAtualizarDB = (index, cliente)=>{
    const banco = getBanco()
    banco[index] = cliente
    setBanco(banco)
}
const preencherCampos =(usuario)=>{
    document.getElementById('nome').value = usuario.nome;
    document.getElementById('email').value = usuario.email;
    document.getElementById('telefone').value = usuario.telefone 
}

const editarUsuario = (index)=>{
    const Usuario =usuario
    Usuario.index = index
    preencherCampos(Usuario)
    
}

const salvarEdicao = (evento)=>{
    event.preventDefault()

        if(evento.target.textContent === 'Editar'){
            editarUsuario(1)
            evento.target.textContent = 'Salvar'

        }else{

            if (validarCampos()) {
                evento.target.textContent = 'Editar'
                limparCampos()
            }
        }
    }
    
    

document.getElementById("salvar").addEventListener("click", salvarEdicao)