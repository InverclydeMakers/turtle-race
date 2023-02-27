namespace SpriteKind {
    export const Turtle = SpriteKind.create()
    export const FinishLine = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Turtle, SpriteKind.Turtle, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Turtle, SpriteKind.FinishLine, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
scene.setBackgroundImage(assets.image`myImage`)
let finish_line = sprites.create(assets.image`finish_line`, SpriteKind.FinishLine)
finish_line.setPosition(150, 110)
let turtle1 = sprites.create(assets.image`turtle`, SpriteKind.Turtle)
turtle1.setPosition(10, 80)
let turtle2 = sprites.create(assets.image`turtle`, SpriteKind.Turtle)
turtle2.setPosition(10, 100)
game.onUpdate(function () {
    turtle1.x += randint(0, 0.5)
    turtle1.y += randint(-0.5, 0.5)
    turtle2.x += randint(0, 0.5)
    turtle2.y += randint(-0.5, 0.5)
})
