let r_button_count = 0
input.onButtonPressed(Button.A, function () {
    r_button_count = 0
    music.play(music.stringPlayable("A G A F G A E C5 ", 180), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 4; index++) {
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
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Yes")
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
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    r_button_count += 1
    basic.showString("No")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C D E C D E G E ", 120), music.PlaybackMode.LoopingInBackground)
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
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.stopAllSounds()
})
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
})
