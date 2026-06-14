const character = {
  name: 'Snortleblat',
  class: 'Swamp Beast Diplomat',
  level: 5,
  health: 60,
  image: 'images/snortleblat.webp',
  attacked: function () {
    this.health -= 20;
    render();
    if (this.health <= 0) {
      window.alert(`${this.name} has died!`);
    }
  },
  levelUp: function () {
    this.level++;
    render();
  }
};

function render() {
  document.querySelector('#image').src = character.image;
  document.querySelector('#image').alt = character.name;
  document.querySelector('#name').textContent = character.name;
  document.querySelector('#class').textContent = character.class;
  document.querySelector('#level').textContent = character.level;
  document.querySelector('#health').textContent = character.health;
}

render();

document.querySelector('#attacked').addEventListener('click', function () {
  character.attacked();
});

document.querySelector('#levelUp').addEventListener('click', function () {
  character.levelUp();
});
