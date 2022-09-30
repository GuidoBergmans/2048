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
let list: number[] = []
let right = 0
let left = 0
let down = 0
let up = 0
let cells_y = 0
let cells_x = 0
scene.setBackgroundColor(13)
cells_x = 4
cells_y = 4
let cells = cells_x * cells_y
let max_cell_index = cells - 1
up = 0
down = 1
left = 2
right = 3
list = [cells_x, cells_y]
for (let index = 0; index <= max_cell_index; index++) {
    let empty_cell = 0
    list[index] = empty_cell
}
list[randint(0, max_cell_index)] = randint(1, 2) * 2
