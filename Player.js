/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.lives = PLAYER_LIVES; //Añadir un atributo nuevo lives
    }

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Mata al jugador
     */
    collide() {
        if (!this.dead) {
                if (this.lives > 1) {
                this.lives -= 1;  //Restar una vida cada vez que al jugador le alcance un disparo mientras esté vivo
                super.collide();
                document.getElementById("livesli").innerHTML = `<strong>Lives:</strong> ${game.player.lives}`;                
                setTimeout(() => {
                    this.image.src = this.myImage; //Renace el jugador 
                    this.dead = false;
                }, 2000); //Si al jugador le quedan vidas, debe morirse en 2 segundos
                this.livesText.innerHTML = this.lives; //
                } else { //Si al jugador no le quedan vidas, debe morirse definitivamente
                    this.lives -= 1;  
                document.getElementById("livesli").innerHTML = `<strong>Lives:</strong> ${this.lives}`;    
                this.image.src = this.myImageDead; //
                super.collide();
                game.endGame(); 
            }
        }
    }
}