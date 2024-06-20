//Editar dados 
async function editarDados() {
  try {
      const response = await fetch('https://api-usuario/dados-de-teste/1');
      const usuario = await response.json();

      // Preencha o formulário com os dados recebidos
      document.getElementById('nome').value = usuario.nome;
      document.getElementById('email').value = usuario.email;
  } catch (error) {
      console.log('Erro ao carregar os dados:', error);
  }
}

//falvar dados editados
async function salvarDados() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  const usuario = {
      nome: name,
      email: email
  };

  try {
      const response = await fetch('https://api-usuario/dados-de-teste/1', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
      });

      if (response.ok) {
          console.log('Dados salvos com sucesso!');
      } else {
          console.error('Erro ao salvar os dados:', response.statusText);
      }
  } catch (error) {
      console.error('Erro ao salvar os dados:', error);
  }
}
