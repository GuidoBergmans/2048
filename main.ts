scene.setBackgroundColor(13)
let cells_x = 4
let cells_y = 4
let cells = cells_x * cells_y
let max_cell_index = cells - 1
let list = [cells_x, cells_y]
for (let index = 0; index <= max_cell_index; index++) {
    let empty_cell = 0
    list[index] = empty_cell
}
list[randint(0, max_cell_index)] = randint(1, 2) * 2
