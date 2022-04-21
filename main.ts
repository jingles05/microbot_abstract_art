input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 100)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, 100)
    pins.analogWritePin(AnalogPin.P0, 100)
    basic.pause(300)
})
pins.analogWritePin(AnalogPin.P0, 100)
pins.analogWritePin(AnalogPin.P1, 100)
basic.pause(100)
pins.analogWritePin(AnalogPin.P0, 100)
pins.analogWritePin(AnalogPin.P0, 100)
basic.forever(function () {
	
})
