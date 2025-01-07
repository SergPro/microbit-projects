let r_button_count = 0
input.onButtonPressed(Button.A, function () {
    r_button_count = 0
    music.play(music.stringPlayable("A G A F G A E C5 ", 180), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 3; index++) {
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
    }
    music.stopAllSounds()
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
