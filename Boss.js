/**
 * El Jefe final Oponente más rápido al que hay que vencer para ganar
 */
class Boss extends Opponent {
    /**
     * @param game {Game} la instancia del juego a la que pertenece el oponente final
     */
    constructor (game) {
        const myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game, myImage, myImageDead);
        this.speed = OPPONENT_SPEED * 2;
        this.opponent = "_Boss_";
        this.image.src = this.opponent.dead === true ? BOSS_PICTURE_DEAD : BOSS_PICTURE;
        this.direction = "R"; // Dirección hacia la que se mueve el jefe
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }
}