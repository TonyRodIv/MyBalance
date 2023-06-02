const spending = [
    {
        day: "mon",
        amount: 17.45
    },
    {
        day: "tue",
        amount: 34.91
    },
    {
        day: "wed",
        amount: 52.36
    },
    {
        day: "thu",
        amount: 31.07
    },
    {
        day: "fri",
        amount: 23.39
    },
    {
        day: "sat",
        amount: 43.28
    },
    {
        day: "sun",
        amount: 25.48
    }
];
const writeGraphic = document.getElementById('writeGraphic');
const progress = document.getElementsByClassName('progress');

for (let i = 0; i < spending.length; i++) {
  writeGraphic.innerHTML += `
    <div class="progressCont">
      <article class="progress ${spending[i].day}">
      </article>
      <p class="month greyTitle">
        ${spending[i].day}
      </p>
    </div>
  `;

  progress[i].style.height = `${(spending[i].amount)+10}%`;
}

