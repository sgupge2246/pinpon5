let bar_x = 0
let interval = 0
let interval_step = 0
let ball_x = 0
let ball_y = 0
let ball_dx = 0
let ball_dy = 0
let point = 0
let in_game = false
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    bar_x = 0
    interval = 500
    interval_step = 10
    ball_x = 3
    ball_y = 4
    ball_dx = -1
    ball_dy = -1
    point = 0
    basic.showString("GO!")
    in_game = true
    while (in_game) {
        if (in_game) {
        	
        } else {
            game.setScore(point)
            game.gameOver()
        }
    }
})
