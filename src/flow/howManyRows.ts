import { effect, signal } from "@preact/signals-react";

export const howManyRows = signal(getHowManyRows())

function getHowManyRows() {
  const value = localStorage.getItem("CHARACTERS_APP_HOWMANYROWS");
  if (value == null) return 1;
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(
    "CHARACTERS_APP_HOWMANYROWS",
    JSON.stringify(howManyRows.value)
  );
});

export function setHowManyRows(value: number){
  howManyRows.value = value
}