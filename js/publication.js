async function loadComments() {
  const response = await fetch('../json/publication-comments.json');
  const datas = await response.json();

  const commentsSection = document.querySelector('#comments');
  try {
    for (const data of datas) {
      const commentDiv = document.createElement('div');
      const commentH3 = document.createElement('h3');
      commentH3.innerHTML = data.name + ':';
      const commentP = document.createElement('p');
      commentP.innerHTML = data.comment;

      commentDiv.appendChild(commentH3);
      commentDiv.appendChild(commentP);
      commentsSection.appendChild(commentDiv);
    }
  } catch (error) {
    console.log(error);
    commentsSection.innerHTML = 'Erro ao carregar os comentários';
  }
}

loadComments();

