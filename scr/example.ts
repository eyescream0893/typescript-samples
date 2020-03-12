function taxed(amout): number {
    return amout * 1.1
}

function fee(amout): number {
  return amout * 1.4;
}

function price(amout): number {
  return `${fee(amout)}` //Error
}
