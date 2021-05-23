const toggles = document.querySelectorAll('.toggle');
const time = document.querySelector('#time');
const energy = document.querySelector('#energy');
const money = document.querySelector('#money');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => balanceLifestyle(e.target))
);

function balanceLifestyle(changed) {
  if (time.checked && energy.checked && money.checked) {
    if (time === changed) {
      energy.checked = false;
      //   money.checked = false;
    }

    if (energy === changed) {
      time.checked = false;
    }

    if (money === changed) {
      energy.checked = false;
    }
  }
}
