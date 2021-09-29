btnAdd.onclick=function() {
int1 = Number(int1.value)
int2 = Number(int2.value)
let sum = int1+int2
lblAnswer.value = sum

}


btnMultiply.onclick=function() {
int1 = Number(int1.value)
int2 = Number(int2.value)
mult = int1*int2
lblAnswer.value = mult
}

btnClear.onclick=function() {
lblAnswer.value = ""}

