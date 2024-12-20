controller.up.onEvent(ControllerButtonEvent.Released, function () {
    sprites.destroy(man)
    man = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f c c c c f f . . 
        . f f c c c c c c f f . 
        f f c c c c c c c c f f 
        f f c c f c c c c c c f 
        f f f f f c c c f c c f 
        f f f f c c c f c c f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f e f f f f f f f f e f 
        e 4 f 7 7 7 7 7 7 c 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    man.setPosition(x, y)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    man,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    500,
    true
    )
})
let y = 0
let x = 0
let man: Sprite = null
man = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f c f f f . 
    f f f f f f c c f f f c 
    f f f c f f f f f f f c 
    c c c f f f e e f f c c 
    f f f f f e e f f c c f 
    f f f b f e e f b f f f 
    . f 4 1 f 4 4 f 1 4 f . 
    . f e 4 4 4 4 4 4 e f . 
    . f f f e e e e f f f . 
    f e f b 7 7 7 7 b f e f 
    e 4 f 7 7 7 7 7 7 f 4 e 
    e e f 6 6 6 6 6 6 f e e 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`уровень2`)
forever(function () {
    controller.moveSprite(man)
    scene.cameraFollowSprite(man)
})
game.onUpdateInterval(500, function () {
    x = man.x
    y = man.y
})
