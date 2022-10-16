@namespace
class SpriteKind:
    tile = SpriteKind.create()
def press(direction: number):
    global did_move, did_merge
    did_move = move(direction)
    did_merge = merge(direction)
    if did_merge:
        move(direction)
    DrawScreen()
    if did_move or did_merge:
        if not (AddTile()):
            game.over(False)
        AddHistory()
    else:
        if EmptyCells() == 0 and not (MergePossible()):
            game.over(False)
def indexToX(index: number):
    return index % cells_x
def DrawScreen():
    global index42
    sprites.destroy_all_sprites_of_kind(SpriteKind.tile)
    index42 = 0
    y = 0
    while y <= cells_y - 1:
        x = 0
        while x <= cells_x - 1:
            drawTile(x, y, list2[index42], False)
            index42 = index42 + 1
            x += 1
        y += 1

def on_up_pressed():
    press(up)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def GetHistory():
    global PreviousScore, CurrentScore
    if len(history) > cells:
        info.set_score(PreviousScore)
        PreviousScore = CurrentScore
        CurrentScore = info.score()
        index2 = 0
        while index2 <= max_cell_index:
            list2[index2] = history[index2]
            index2 += 1
        index3 = 0
        while index3 <= max_cell_index:
            history.pop()
            index3 += 1
def MergePossible():
    global index1, index23, value
    x2 = 0
    while x2 <= cells_x - 1:
        y1 = 0
        while y1 <= cells_y - 2:
            index1 = xyToIndex(x2, y1)
            index23 = xyToIndex(x2, y1 + 1)
            value = list2[index1]
            if value == list2[index23]:
                return True
            y1 += 1
        x2 += 1
    y12 = 0
    while y12 <= cells_y - 1:
        x22 = 0
        while x22 <= cells_x - 2:
            index1 = xyToIndex(x22, y12)
            index23 = xyToIndex(x22 + 1, y12)
            value = list2[index1]
            if value == list2[index23]:
                return True
            x22 += 1
        y12 += 1
    return False

def on_b_pressed():
    GetHistory()
    DrawScreen()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global moved_in_one_of_presses
    while EmptyCells() != 0 or MergePossible():
        press(up)
        moved_in_one_of_presses = did_move
        if not (did_move):
            press(left)
            moved_in_one_of_presses = moved_in_one_of_presses or did_move
            if not (did_move):
                press(right)
                moved_in_one_of_presses = moved_in_one_of_presses or did_move
        if not (moved_in_one_of_presses):
            press(down)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def AddHistory():
    global PreviousScore, CurrentScore
    if len(history) > cells:
        for index4 in range(cells):
            history.shift()
    index5 = 0
    while index5 <= max_cell_index:
        history.append(list2[index5])
        index5 += 1
    PreviousScore = CurrentScore
    CurrentScore = info.score()
def xyToIndex(x3: number, y2: number):
    global result
    result = y2 * cells_x + x3
    return result

def on_left_pressed():
    press(left)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def EmptyCells():
    global result
    result = 0
    index6 = 0
    while index6 <= cells:
        if list2[index6] == 0:
            result = result + 1
        index6 += 1
    return result
def merge(direction2: number):
    global merged, index1, index23, value, new_tile_value
    merged = False
    if direction2 == up:
        x23 = 0
        while x23 <= cells_x - 1:
            y13 = 0
            while y13 <= cells_y - 2:
                index1 = xyToIndex(x23, y13)
                index23 = xyToIndex(x23, y13 + 1)
                value = list2[index1]
                if value == list2[index23]:
                    new_tile_value = value * 2
                    info.change_score_by(value)
                    list2[index1] = new_tile_value
                    list2[index23] = empty_cell
                    merged = True
                y13 += 1
            x23 += 1
    elif direction2 == down:
        x24 = 0
        while x24 <= cells_x - 1:
            y14 = 0
            while y14 <= cells_y - 2:
                index1 = xyToIndex(x24, cells_y - (y14 + 1))
                index23 = xyToIndex(x24, cells_y - (y14 + 1 + 1))
                value = list2[index1]
                if value == list2[index23]:
                    new_tile_value = value * 2
                    info.change_score_by(value)
                    list2[index1] = new_tile_value
                    list2[index23] = empty_cell
                    merged = True
                y14 += 1
            x24 += 1
    elif direction2 == right:
        y15 = 0
        while y15 <= cells_y - 1:
            x25 = 0
            while x25 <= cells_x - 2:
                index1 = xyToIndex(cells_x - (x25 + 1), y15)
                index23 = xyToIndex(cells_x - (x25 + 1 + 1), y15)
                value = list2[index1]
                if value == list2[index23]:
                    new_tile_value = value * 2
                    info.change_score_by(value)
                    list2[index1] = new_tile_value
                    list2[index23] = empty_cell
                    merged = True
                x25 += 1
            y15 += 1
    else:
        y16 = 0
        while y16 <= cells_y - 1:
            x26 = 0
            while x26 <= cells_x - 2:
                index1 = xyToIndex(x26, y16)
                index23 = xyToIndex(x26 + 1, y16)
                value = list2[index1]
                if value == list2[index23]:
                    new_tile_value = value * 2
                    info.change_score_by(value)
                    list2[index1] = new_tile_value
                    list2[index23] = empty_cell
                    merged = True
                x26 += 1
            y16 += 1
    return merged
def indexToY(index7: number):
    return Math.idiv(index7, cells_y)

def on_right_pressed():
    press(right)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def AddTile():
    global empty_cells, new_tile_value, new_tile_index
    empty_cells = EmptyCells()
    if empty_cells == 0:
        return False
    if randint(1, 10) <= 2:
        new_tile_value = 4
    else:
        new_tile_value = 2
    new_tile_index = randint(0, empty_cells - 1)
    index22 = 0
    while index22 <= cells:
        if list2[index22] != 0:
            new_tile_index = new_tile_index + 1
        if index22 == new_tile_index:
            break
        index22 += 1
    list2[new_tile_index] = new_tile_value
    drawTile(indexToX(new_tile_index),
        indexToY(new_tile_index),
        new_tile_value,
        True)
    return True

def on_down_pressed():
    press(down)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def drawTile(pos_x: number, pos_y: number, num: number, animate: bool):
    global newTile
    if num == 2:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 4:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 8:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 16:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 32:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 64:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 128:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 256:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 512:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 1024:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    elif num == 2048:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    else:
        newTile = sprites.create(img("""
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
            """),
            SpriteKind.tile)
    newTile.left = pos_x * newTile.width
    newTile.top = pos_y * newTile.height
    if animate:
        newTile.change_scale(-1, ScaleAnchor.MIDDLE)
        for index8 in range(5):
            newTile.change_scale(0.2, ScaleAnchor.MIDDLE)
            pause(20)
def move(direction3: number):
    global moved, y3, index1, index23, new_tile_value, y4, x32, x4
    moved = False
    if direction3 == up:
        x27 = 0
        while x27 <= cells_x - 1:
            y17 = 0
            while y17 <= cells_y - 2:
                y22 = 0
                while y22 <= cells_y - (y17 + 1):
                    y3 = y17 + y22
                    if list2[xyToIndex(x27, y17)] == empty_cell:
                        if list2[xyToIndex(x27, y3)] != empty_cell:
                            index1 = xyToIndex(x27, y17)
                            index23 = xyToIndex(x27, y3)
                            new_tile_value = list2[index23]
                            list2[index1] = new_tile_value
                            list2[index23] = empty_cell
                            moved = True
                            break
                    y22 += 1
                y17 += 1
            x27 += 1
    elif direction3 == down:
        x28 = 0
        while x28 <= cells_x - 1:
            y18 = 0
            while y18 <= cells_y - 2:
                y23 = 0
                while y23 <= cells_y - (y18 + 1):
                    y3 = cells_y - (y18 + y23 + 1)
                    y4 = cells_y - (y18 + 1)
                    index1 = xyToIndex(x28, y4)
                    index23 = xyToIndex(x28, y3)
                    if list2[index1] == empty_cell:
                        if list2[index23] != empty_cell:
                            new_tile_value = list2[index23]
                            list2[index1] = new_tile_value
                            list2[index23] = empty_cell
                            moved = True
                            break
                    y23 += 1
                y18 += 1
            x28 += 1
    elif direction3 == right:
        y24 = 0
        while y24 <= cells_y - 1:
            x1 = 0
            while x1 <= cells_x - 2:
                x29 = 0
                while x29 <= cells_x - (x1 + 1):
                    x32 = cells_x - (x1 + x29 + 1)
                    x4 = cells_x - (x1 + 1)
                    if list2[xyToIndex(x4, y24)] == empty_cell:
                        if list2[xyToIndex(x32, y24)] != empty_cell:
                            index1 = xyToIndex(x4, y24)
                            index23 = xyToIndex(x32, y24)
                            new_tile_value = list2[index23]
                            list2[index1] = new_tile_value
                            list2[index23] = empty_cell
                            moved = True
                            break
                    x29 += 1
                x1 += 1
            y24 += 1
    else:
        y25 = 0
        while y25 <= cells_y - 1:
            x12 = 0
            while x12 <= cells_x - 2:
                x210 = 0
                while x210 <= cells_x - (x12 + 1):
                    x32 = x12 + x210
                    if list2[xyToIndex(x12, y25)] == empty_cell:
                        if list2[xyToIndex(x32, y25)] != empty_cell:
                            index1 = xyToIndex(x12, y25)
                            index23 = xyToIndex(x32, y25)
                            new_tile_value = list2[index23]
                            list2[index1] = new_tile_value
                            list2[index23] = empty_cell
                            moved = True
                            break
                    x210 += 1
                x12 += 1
            y25 += 1
    return moved
x4 = 0
x32 = 0
y4 = 0
y3 = 0
moved = False
newTile: Sprite = None
new_tile_index = 0
empty_cells = 0
new_tile_value = 0
merged = False
result = 0
moved_in_one_of_presses = False
value = 0
index42 = 0
did_merge = False
did_move = False
history: List[number] = []
PreviousScore = 0
CurrentScore = 0
index23 = 0
index1 = 0
list2: List[number] = []
max_cell_index = 0
cells = 0
empty_cell = 0
cells_y = 0
cells_x = 0
right = 0
left = 0
down = 0
up = 0
up = 0
down = 1
left = 2
right = 3
cells_x = 4
cells_y = 4
empty_cell = 0
cells = cells_x * cells_y
max_cell_index = cells - 1
list2 = [cells_x, cells_y]
index9 = 0
while index9 <= max_cell_index:
    list2[index9] = empty_cell
    index9 += 1
index1 = randint(0, max_cell_index)
index23 = randint(0, max_cell_index - 1)
if index23 >= index1:
    index23 = index23 + 1
info.set_score(0)
CurrentScore = 0
PreviousScore = 0
AddTile()
AddTile()
scene.set_background_color(1)
DrawScreen()
history = []
AddHistory()