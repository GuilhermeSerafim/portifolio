function validateForm(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
  
    // Verifica se os campos estão preenchidos
    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Verifica se o formato do email é válido - Email Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert('Por favor, insira um endereço de email válido.');
      return;
    }
  
    // Envia o formulário por email
    const emailContent = `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    const mailtoLink = `mailto:guilerstudies@gmail.com?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(emailContent)}`;
  
    window.location.href = mailtoLink;
  
    alert('Formulário enviado com sucesso!');
  }
  
  const form = document.querySelector('.formcontato__form');
  form.addEventListener('submit', validateForm);
  