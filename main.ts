namespace SpriteKind {
    export const tile = SpriteKind.create()
}
function press (direction: number) {
    move(direction)
    merge(direction)
    move(direction)
    if (!(AddTile())) {
        for (let index3 = 0; index3 <= cells; index3++) {
            list[index3] = empty_cell
        }
    }
    DrawScreen()
}
function DrawScreen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.tile)
    index4 = 0
    for (let y = 0; y <= cells_y - 1; y++) {
        for (let x = 0; x <= cells_x - 1; x++) {
            drawTile(x, y, list[index4])
            index4 = index4 + 1
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    press(up)
})
function xyToIndex (x: number, y: number) {
    result = y * cells_x + x
    return result
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    press(left)
})
function merge (direction: number) {
    if (direction == up) {
        for (let x2 = 0; x2 <= cells_x - 1; x2++) {
            for (let y1 = 0; y1 <= cells_y - 2; y1++) {
                index1 = xyToIndex(x2, y1)
                index2 = xyToIndex(x2, y1 + 1)
                if (list[index1] == list[index2]) {
                    new_tile_value = list[index1] * 2
                    list[index1] = new_tile_value
                    list[index2] = empty_cell
                }
            }
        }
    } else if (direction == down) {
        for (let x2 = 0; x2 <= cells_x - 1; x2++) {
            for (let y1 = 0; y1 <= cells_y - 2; y1++) {
                index1 = xyToIndex(x2, cells_y - (y1 + 1))
                index2 = xyToIndex(x2, cells_y - (y1 + 1 + 1))
                if (list[index1] == list[index2]) {
                    new_tile_value = list[index1] * 2
                    list[index1] = new_tile_value
                    list[index2] = empty_cell
                }
            }
        }
    } else if (direction == right) {
        for (let y1 = 0; y1 <= cells_y - 1; y1++) {
            for (let x2 = 0; x2 <= cells_x - 2; x2++) {
                index1 = xyToIndex(cells_x - (x2 + 1), y1)
                index2 = xyToIndex(cells_x - (x2 + 1 + 1), y1)
                if (list[index1] == list[index2]) {
                    new_tile_value = list[index1] * 2
                    list[index1] = new_tile_value
                    list[index2] = empty_cell
                }
            }
        }
    } else {
        for (let y1 = 0; y1 <= cells_y - 1; y1++) {
            for (let x2 = 0; x2 <= cells_x - 2; x2++) {
                index1 = xyToIndex(x2, y1)
                index2 = xyToIndex(x2 + 1, y1)
                if (list[index1] == list[index2]) {
                    new_tile_value = list[index1] * 2
                    list[index1] = new_tile_value
                    list[index2] = empty_cell
                }
            }
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    press(right)
})
function AddTile () {
    if (randint(1, 10) <= 2) {
        new_tile_value = 4
    } else {
        new_tile_value = 2
    }
    empty_cells = 0
    for (let index = 0; index <= cells; index++) {
        if (list[index] == 0) {
            empty_cells = empty_cells + 1
        }
    }
    if (empty_cells == 0) {
        return false
    }
    new_tile_index = randint(0, empty_cells - 1)
    for (let index2 = 0; index2 <= cells; index2++) {
        if (list[index2] != 0) {
            new_tile_index = new_tile_index + 1
        }
        if (index2 == new_tile_index) {
            break;
        }
    }
    list[new_tile_index] = new_tile_value
    return true
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    press(down)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
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
            `, SpriteKind.tile)
    } else {
        newTile = sprites.create(img`
            .........................
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .ddddddddddddddddddddddd.
            .........................
            `, SpriteKind.tile)
    }
    newTile.left = pos_x * newTile.width
    newTile.top = pos_y * newTile.height
}
function move (direction: number) {
    if (direction == up) {
        for (let x2 = 0; x2 <= cells_x - 1; x2++) {
            for (let y1 = 0; y1 <= cells_y - 2; y1++) {
                for (let y2 = 0; y2 <= cells_y - (y1 + 1); y2++) {
                    y3 = y1 + y2
                    if (list[xyToIndex(x2, y1)] == empty_cell) {
                        if (list[xyToIndex(x2, y3)] != empty_cell) {
                            index1 = xyToIndex(x2, y1)
                            index2 = xyToIndex(x2, y3)
                            new_tile_value = list[index2]
                            list[index1] = new_tile_value
                            list[index2] = empty_cell
                            break;
                        }
                    }
                }
            }
        }
    } else if (direction == down) {
        for (let x2 = 0; x2 <= cells_x - 1; x2++) {
            for (let y1 = 0; y1 <= cells_y - 2; y1++) {
                for (let y2 = 0; y2 <= cells_y - (y1 + 1); y2++) {
                    y3 = cells_y - (y1 + y2 + 1)
                    y4 = cells_y - (y1 + 1)
                    if (list[xyToIndex(x2, y4)] == empty_cell) {
                        if (list[xyToIndex(x2, y3)] != empty_cell) {
                            index1 = xyToIndex(x2, y4)
                            index2 = xyToIndex(x2, y3)
                            new_tile_value = list[index2]
                            list[index1] = new_tile_value
                            list[index2] = empty_cell
                            break;
                        }
                    }
                }
            }
        }
    } else if (direction == right) {
        for (let y2 = 0; y2 <= cells_y - 1; y2++) {
            for (let x1 = 0; x1 <= cells_x - 2; x1++) {
                for (let x2 = 0; x2 <= cells_x - (x1 + 1); x2++) {
                    x3 = cells_x - (x1 + x2 + 1)
                    x4 = cells_x - (x1 + 1)
                    if (list[xyToIndex(x4, y2)] == empty_cell) {
                        if (list[xyToIndex(x3, y2)] != empty_cell) {
                            index1 = xyToIndex(x4, y2)
                            index2 = xyToIndex(x3, y2)
                            new_tile_value = list[index2]
                            list[index1] = new_tile_value
                            list[index2] = empty_cell
                            break;
                        }
                    }
                }
            }
        }
    } else {
        for (let y2 = 0; y2 <= cells_y - 1; y2++) {
            for (let x1 = 0; x1 <= cells_x - 2; x1++) {
                for (let x2 = 0; x2 <= cells_x - (x1 + 1); x2++) {
                    x3 = x1 + x2
                    if (list[xyToIndex(x1, y2)] == empty_cell) {
                        if (list[xyToIndex(x3, y2)] != empty_cell) {
                            index1 = xyToIndex(x1, y2)
                            index2 = xyToIndex(x3, y2)
                            new_tile_value = list[index2]
                            list[index1] = new_tile_value
                            list[index2] = empty_cell
                            break;
                        }
                    }
                }
            }
        }
    }
}
let x4 = 0
let x3 = 0
let y4 = 0
let y3 = 0
let newTile: Sprite = null
let new_tile_index = 0
let empty_cells = 0
let new_tile_value = 0
let result = 0
let index4 = 0
let index2 = 0
let index1 = 0
let list: number[] = []
let cells = 0
let empty_cell = 0
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
empty_cell = 0
cells = cells_x * cells_y
let max_cell_index = cells - 1
list = [cells_x, cells_y]
for (let index23 = 0; index23 <= max_cell_index; index23++) {
    list[index23] = empty_cell
}
index1 = randint(0, max_cell_index)
index2 = randint(0, max_cell_index - 1)
if (index2 >= index1) {
    index2 = index2 + 1
}
AddTile()
AddTile()
scene.setBackgroundColor(1)
DrawScreen()
