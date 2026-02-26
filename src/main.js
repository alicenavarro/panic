const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222',
  scene: {
    create: create
  }
};

const game = new Phaser.Game(config);

function create() {
  this.add.text(300, 250, 'PANIC', { fontSize: '32px', fill: '#fff' });
}