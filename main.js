var sec=0
var min=0
var hora=0
var zerar

const twoDigits = (digit) => {
    if (digit < 10){
        return "0"+digit
    }
    else{
        return digit
    }
}

const start = () => {
    watch()
    zerar = setInterval(watch, 1000)
}

const pause = () => {
    clearInterval(zerar)
}

const stop = () => {
    clearInterval(zerar)
    sec=0
    min=0
    hora=0
    document.querySelector("#watch").innerHTML = "00:00:00"
}

const watch = () => {
    sec++
    if (sec == 60){
        min++
        sec=0
        if (min == 60){
            min=0
            hora++
        }
    }
    document.querySelector("#watch").innerHTML = twoDigits(hora)+":"+twoDigits(min)+":"+twoDigits(sec)
}