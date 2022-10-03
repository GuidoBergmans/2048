namespace SpriteKind {
    export const tile = SpriteKind.create()
}
function DrawScreen () {
    index = 0
    for (let y = 0; y <= cells_y - 1; y++) {
        for (let x = 0; x <= cells_x - 1; x++) {
            drawTile(x, y, list[index])
            index = index + 1
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    move(up)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    move(left)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    move(right)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    move(down)
})
function drawTile (pos_x: number, pos_y: number, num: number) {
    if (num == 2) {
        newTile = sprites.create(img`
            .........................
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .2222222222fff2222222222.
            .222222222f222f222222222.
            .2222222222222f222222222.
            .22222222222ff2222222222.
            .2222222222f222222222222.
            .222222222f2222222222222.
            .222222222fffff222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .22222222222222222222222.
            .........................
            `, SpriteKind.tile)
    } else if (num == 4) {
        newTile = sprites.create(img`
            .........................
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333f33f33333333333.
            .33333333f33f33333333333.
            .33333333f33f33333333333.
            .33333333fffff3333333333.
            .33333333333f33333333333.
            .33333333333f33333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .33333333333333333333333.
            .........................
            `, SpriteKind.Player)
    } else if (num == 8) {
        newTile = sprites.create(img`
            .........................
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .4444444444ff44444444444.
            .444444444f44f4444444444.
            .4444444444ff44444444444.
            .444444444f44f4444444444.
            .444444444f44f4444444444.
            .4444444444ff44444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .44444444444444444444444.
            .........................
            `, SpriteKind.Player)
    } else if (num == 16) {
        newTile = sprites.create(img`
            .........................
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .5555555f5555fff55555555.
            .55555fff555f555f5555555.
            .5555555f555f55555555555.
            .5555555f555ffff55555555.
            .5555555f555f555f5555555.
            .5555555f555f555f5555555.
            .55555fffff55fff55555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .55555555555555555555555.
            .........................
            `, SpriteKind.Player)
    } else if (num == 32) {
        newTile = sprites.create(img`
            .........................
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .6666666fff666fff6666666.
            .666666f666f6f666f666666.
            .6666666666f66666f666666.
            .66666666ff6666ff6666666.
            .6666666666f66f666666666.
            .666666f666f6f6666666666.
            .6666666fff66fffff666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .66666666666666666666666.
            .........................
            `, SpriteKind.Player)
    } else if (num == 64) {
        newTile = sprites.create(img`
            .........................
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .7777777fff77f77f7777777.
            .777777f777f7f77f7777777.
            .777777f77777f77f7777777.
            .777777ffff77f77f7777777.
            .777777f777f7fffff777777.
            .777777f777f7777f7777777.
            .7777777fff77777f7777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .77777777777777777777777.
            .........................
            `, SpriteKind.Player)
    } else if (num == 128) {
        newTile = sprites.create(img`
            .........................
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888f8888fff888fff8888.
            .888fff888f888f8f888f888.
            .88888f8888888f8f888f888.
            .88888f88888ff888fff8888.
            .88888f8888f8888f888f888.
            .88888f888f88888f888f888.
            .888fffff8fffff88fff8888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .88888888888888888888888.
            .........................
            `, SpriteKind.Player)
    } else if (num == 256) {
        newTile = sprites.create(img`
            .........................
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .9999fff99fffff99fff9999.
            .999f999f9f99999f999f999.
            .9999999f9f99999f9999999.
            .99999ff99ffff99ffff9999.
            .9999f99999999f9f999f999.
            .999f999999999f9f999f999.
            .999fffff9ffff999fff9999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .99999999999999999999999.
            .........................
            `, SpriteKind.Player)
    } else if (num == 512) {
        newTile = sprites.create(img`
            .........................
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaafffffaaafaaaafffaaaa.
            .aaafaaaaafffaaafaaafaaa.
            .aaafaaaaaaafaaaaaaafaaa.
            .aaaffffaaaafaaaaaffaaaa.
            .aaaaaaafaaafaaaafaaaaaa.
            .aaaaaaafaaafaaafaaaaaaa.
            .aaaffffaafffffafffffaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaa.
            .........................
            `, SpriteKind.Player)
    } else if (num == 1024) {
        newTile = sprites.create(img`
            .........................
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbfbbbbfffbbbfffbbfbbfb.
            .fffbbbfbbbfbfbbbfbfbbfb.
            .bbfbbbfbbbfbbbbbfbfbbfb.
            .bbfbbbfbbbfbbbffbbfbbfb.
            .bbfbbbfbbbfbbfbbbbfffff.
            .bbfbbbfbbbfbfbbbbbbbbfb.
            .fffffbbfffbbfffffbbbbfb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .bbbbbbbbbbbbbbbbbbbbbbb.
            .........................
            `, SpriteKind.Player)
    } else if (num == 2048) {
        newTile = sprites.create(img`
            .........................
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .cfffcccfffccfccfcccfffc.
            .fcccfcfcccfcfccfccfcccf.
            .ccccfcfcccfcfccfccfcccf.
            .ccffccfcccfcfccfcccfffc.
            .cfccccfcccfcfffffcfcccf.
            .fcccccfcccfccccfccfcccf.
            .fffffccfffcccccfcccfffc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .ccccccccccccccccccccccc.
            .........................
            `, SpriteKind.Player)
    } else {
        newTile = sprites.create(img`
            .........................
            .44444444444444444444444.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .4.....................4.
            .44444444444444444444444.
            .........................
            `, SpriteKind.tile)
    }
    newTile.left = pos_x * newTile.width
    newTile.top = pos_y * newTile.height
}
function move (direction: number) {
    if (direction == up) {
        for (let x = 0; x <= cells_x; x++) {
            for (let y = 0; y <= cells_y; y++) {
                if (list[0] == 0) {
                	
                }
            }
        }
    } else if (direction == down) {
    	
    } else if (direction == left) {
    	
    } else {
    	
    }
}
let newTile: Sprite = null
let index = 0
let list: number[] = []
let cells_y = 0
let cells_x = 0
let right = 0
let left = 0
let down = 0
let up = 0
up = 0
down = 1
left = 2
right = 3
cells_x = 4
cells_y = 4
let cells = cells_x * cells_y
let max_cell_index = cells - 1
list = [cells_x, cells_y]
for (let index2 = 0; index2 <= max_cell_index; index2++) {
    let empty_cell = 0
    list[index2] = empty_cell
}
let index1 = randint(0, max_cell_index)
let index2 = randint(0, max_cell_index - 1)
if (index2 >= index1) {
    index2 = index2 + 1
}
list[index1] = randint(1, 2) * 2
list[index2] = randint(1, 2) * 2
scene.setBackgroundColor(1)
DrawScreen()
