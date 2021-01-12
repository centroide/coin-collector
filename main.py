def on_on_overlap(sprite, otherSprite):
    coin.set_position(randint(0, 160), randint(0, 120))
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

coin: Sprite = None
info.start_countdown(30)
scene.set_background_color(4)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
coin = sprites.create(img("""
        . . . f f f . . 
            . . f 5 5 1 f . 
            . f 5 5 1 5 5 f 
            . f 5 5 5 5 5 f 
            . f 5 5 5 5 5 f 
            . f 5 5 5 5 5 f 
            . . f 5 5 5 f . 
            . . . f f f . .
    """),
    SpriteKind.food)