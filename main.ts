input.onButtonPressed(Button.A, function () {
    targrt += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(targrt)
})
input.onButtonPressed(Button.B, function () {
    targrt += 1
})
let targrt = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(99)
targrt = 50
basic.forever(function () {
	
})
