"use strict";
function taxed(amout) {
    return amout * 1.1;
}
function fee(amout) {
    return amout * 1.4;
}
function price(amout) {
    return "" + fee(amout); //Error
}
