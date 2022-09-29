const $form = document.querySelector(".form")
const $profile = document.querySelector(".profile")

$form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    picture: $form.picture.files[0],
    name: $form.nama.value,
    birth: $form.birth.value,
    telephone: $form.telephone.value,
    email: $form.email.value,
    password: $form.password.value,
    gender: $form.gender.value,
    letter: $form.letter.value
  };

  showProfile(data);
});

function showProfile(data) {
  const pictURL = URL.createObjectURL(data.picture);

  const template = `
            <img src="${pictURL}" class="" alt="">
            <div class="profile_name">${data.name}</div>
            <div class="profile_birth">${data.birth}</div>
            <div class="profile_telephone">${data.telephone}</div>
            <div class="profile_email">${data.email}</div>
            <div class="profile_password">${data.password}</div>
            <div class="profile_gender">${data.gender}</div>
            <div class="profile_letter">${data.letter}</div>
            `;

    $profile.innerHTML = template;
}

