namespace SpriteKind {
    export const tile = SpriteKind.create()
}
function DrawScreen () {
    for (let index = 0; index <= max_cell_index; index++) {
    	
    }
    for (let y = 0; y <= y - 1; y++) {
        for (let x = 0; x <= cells_x - 1; x++) {
            mySprite = sprites.create(img`
                ............................
                .444444444444444444444444444
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .4.........................4
                .444444444444444444444444444
                `, SpriteKind.tile)
            mySprite.left = x * mySprite.width
            mySprite.top = y * mySprite.height
            mySprite.sayText(2 ** index)
            index = index + 1
            tiles2.push(mySprite)
        }
    }
    index = 0
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
let index = 0
let mySprite: Sprite = null
let tiles2: Sprite[] = []
let list: number[] = []
let right = 0
let left = 0
let down = 0
let up = 0
let max_cell_index = 0
let cells_y = 0
let cells_x = 0
scene.setBackgroundColor(13)
cells_x = 4
cells_y = 4
let cells = cells_x * cells_y
max_cell_index = cells - 1
up = scene.screenHeight()
down = 1
left = 2
right = 3
list = [cells_x, cells_y]
for (let index = 0; index <= max_cell_index; index++) {
    let empty_cell = 0
    list[index] = empty_cell
}
let index1 = randint(0, max_cell_index)
let index2 = randint(0, max_cell_index - 1)
if (index2 >= index1) {
    index2 = index2 + 1
}
list[index1] = randint(1, 2) * 2
list[index2] = randint(1, 2) * 2
tiles2 = sprites.allOfKind(SpriteKind.tile)
scene.setBackgroundColor(1)
DrawScreen()
