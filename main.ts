sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    coin.setPosition(randint(30, 160), randint(30, 120))
    info.changeScoreBy(1)
    music.magicWand.play()
})
let coin: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
coin = sprites.create(img`
    . . . f f f . . 
    . . f 5 5 1 f . 
    . f 5 5 1 5 5 f 
    . f 5 5 5 5 5 f 
    . f 5 5 5 5 5 f 
    . f 5 5 5 5 5 f 
    . . f 5 5 5 f . 
    . . . f f f . . 
    `, SpriteKind.Food)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
scene.setBackgroundColor(4)
