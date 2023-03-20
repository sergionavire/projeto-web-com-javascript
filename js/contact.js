const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const howKnow = data.get('how-know');
  const html5 = data.get('html5');
  const css3 = data.get('css3');
  const javascript = data.get('javascript');
  const reactjs = data.get('reactjs');
  const reactNative = data.get('react-native');
  const nodeJs = data.get('nodejs');
  const mesage = data.get('mesage');
  const receberEmail = data.get('receber-email');

  const isNameValid = validatesName(name);
  const isEmailValid = validatesEmail(email);
  const isHowKnowValid = validatesHowKnow(howKnow);
  const isAtLeastOneChecked = validatesCheckbox(html5 || css3 || javascript || reactjs || reactNative || nodeJs);
  const isMesagelValid = validatesMesage(mesage);

  const isFormValid = isNameValid && isEmailValid && isHowKnowValid && isAtLeastOneChecked && isMesagelValid;

  if (isFormValid) {
    const formDados = {
      name: name,
      email: email,
      phone: phone,
      howKnow: howKnow,
      html5: html5,
      css3: css3,
      javascript: javascript,
      reactjs: reactjs,
      reactNative: reactNative,
      nodeJs: nodeJs,
      mesage: mesage,
      receberEmail: receberEmail
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      body: JSON.stringify(formDados),
      method: 'post',
      headers: {
        'content-type': 'application/json',
      }
    });

    const dados = await response.json();
    console.log(dados);
  }

});

function showMesageError(isValid, tagIdInput, tagIdError, errorMesage) {
  const tagInput = document.querySelector(tagIdInput);
  const errorTag = document.querySelector(tagIdError);

  if (isValid === false) {
    errorTag.innerHTML = errorMesage;
    tagInput.style.border = '2px solid #ff0000';
  } else {
    errorTag.innerHTML = '';
    tagInput.style.border = null;
  }

}

function validatesName(name) {
  const isMinLength3 = name.length > 3;
  const isMaxLength20 = name.length <= 20;
  const isNameValid = isMinLength3 && isMaxLength20;

  showMesageError(isNameValid, '#name', '#error-name', 'O nome deve ter no mínimo 3 caracteres e no máximo 20 caracteres.');

  return isNameValid;
}

function validatesEmail(email) {
  const isEmailValid = ValidateEmailRegex(email);
  showMesageError(isEmailValid, '#email', '#error-email', 'Digite um email válido');
  return isEmailValid;
}

function ValidateEmailRegex(email) {
  const regexExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmailValidRegex = email.match(regexExpression) !== null;
  return isEmailValidRegex;
};

function validatesHowKnow(howKnow) {
  const errorHowKnow = document.querySelector('#error-how-know');
  const isHowKnow = howKnow !== null;

  showMesageError(isHowKnow, '#how-know-list', '#error-how-know', 'Selecione como conheceu');
  return isHowKnow;
}

function validatesCheckbox(boxChecked) {

  const isAtLeastOneChecked = boxChecked !== null;

  showMesageError(isAtLeastOneChecked, '#subject-matter', '#error-subject-matter', 'Selecione pelo menos 1 assunto de interesse');
  return isAtLeastOneChecked;
}

function validatesMesage(mesage) {
  const isMinLength5 = mesage.length > 5;
  const isMaxLength200 = mesage.length <= 200;
  const isMesageValid = isMinLength5 && isMaxLength200;

  showMesageError(isMesageValid, '#mesage', '#error-mesage', 'A mensagem deve ter no mínimo 5 caracteres e no máximo 200 caracteres.');

  return isMesageValid;
}