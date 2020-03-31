const button = document.querySelector('button');
const img = document.querySelector('.user-profile-card__img');
const nameSpan = document.querySelector('.user-profile-card__description__name');
const ageSpan = document.querySelector('.user-profile-card__description__age');
const locationSpan = document.querySelector('.user-profile-card__description__location');

button.addEventListener('click', fetchAndUpdateUserInformation);

function fetchAndUpdateUserInformation() {
  
  const url = 'https://randomuser.me/api/';
  
  fetch(url)
    .then(res => res.json())
    .then(updateUserInformation)
    .catch(console.error)

}

function updateUserInformation({ results }) {
  const user = results[0];
  img.src = user.picture.large;
  nameSpan.textContent = user.name.first;
  ageSpan.textContent = user.dob.age;
  locationSpan.textContent = user.location.country;
}