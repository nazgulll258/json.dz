const charactersContainer = document.getElementById('characters-container');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'persons.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const charactersData = JSON.parse(xhr.responseText);
    charactersData.forEach(person => {
      const card = createCharacterCard(person);
      charactersContainer.appendChild(card);
    });
  }
};
xhr.send();

function createCharacterCard(person) {
  const card = document.createElement('div');
  card.classList.add('card');

  const photo = document.createElement('img');
  photo.src = person.person_photo;
  photo.alt = person.name;
  card.appendChild(photo);

  const name = document.createElement('h4');
  name.textContent = person.name;
  card.appendChild(name);

  const age = document.createElement('p');
  age.textContent = `Age: ${person.age}`;
  card.appendChild(age);

  return card;
}
