var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene:{
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config);

var peixinho;

function preload() {

    //Preload das imagens em assets

    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');

    this.load.image('tesouro', 'assets/tesouro.png');

}

function create(){

    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(100, 525, 'tesouro').setScale(0.25);

    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);


    
}

function update(){

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}