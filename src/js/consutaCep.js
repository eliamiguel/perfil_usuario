

//prencher os campos automaticamente
const preencherCampos = (endereco)=>{

  document.getElementById('endereco').value = endereco.logradouro; 
  document.getElementById('bairro').value = endereco.bairro; 
  document.getElementById('cidade').value = endereco.localidade ;

}

//limpar os campos 
const limparcampo =()=>{
  document.getElementById('endereco').value = ''; 
  document.getElementById('bairro').value = ''; 
  document.getElementById('cidade').value = ''; 
}

//verifica erros na requisição
const existerEror = (endereco)=> endereco.hasOwnProperty('erro')

//valida se os dados iseridos são apenas nunmeros
const eNumero = (cep)=> /^[0-9]+$/.test(cep)

// valida a quantidade de digitos digitados
const cepTemOitodigitosNãoTemLetra = (cep)=>cep.length === 8 && eNumero(cep)


// buscando cep na api
const pesquisarCep = async (evento)=>{
 limparcampo()
 const cep = document.getElementById('cep').value

 const mensagemError = document.getElementById('cepError')
 
 if(cepTemOitodigitosNãoTemLetra(cep)){

      const url = `https://viacep.com.br/ws/${cep}/json/`
      const dados= await fetch(url)
      const endereco = await dados.json()
  
      if(existerEror(endereco)){

          document.getElementById('cepError').classList.add('error')
          mensagemError.innerHTML = 'CEP inválido'
          mensagemError.classList.add('text-error')

      }else {

          document.getElementById('cepError').classList.remove('error')
          mensagemError.innerHTML = ''
          mensagemError.classList.remove('text-error')
          preencherCampos(endereco)

      }

 }else{

      document.getElementById('cepError').classList.add('error')
      mensagemError.innerHTML = 'CEP inválido. Não deve ter menos que 8 digito e nem conter letra'
      mensagemError.classList.add('text-error') 
 }
 
}






document.getElementById('cep').addEventListener('focusout', pesquisarCep)