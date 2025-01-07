let r_button_count = 0
input.onButtonPressed(Button.A, function () {
    r_button_count = 0
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        # # # # #
        . . # . .
        `)
    control.waitMicros(2000)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    control.waitMicros(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 184), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showNumber(r_button_count)
    r_button_count += 1
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
})
