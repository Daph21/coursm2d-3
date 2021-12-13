input.onButtonPressed(Button.A, function () {
    Angle = Math.min(Angle + 10, 180)
})
input.onButtonPressed(Button.B, function () {
    Angle = Math.max(Angle - 10, 0)
})
let Angle = 0
basic.showString("Servo-3")
Angle = 90
servos.P0.setAngle(90)
servos.P0.setStopOnNeutral(true)
basic.forever(function () {
    basic.showNumber(Angle)
    servos.P0.setAngle(Angle)
    basic.pause(200)
})
