import { effect, signal } from "@preact/signals-react";

export const withPagination = signal(getWithPagination())

function getWithPagination() {
  const value = localStorage.getItem("CHARACTERS_APP_WITHPAGINATION");
  if (value == null) return [];
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(
    "CHARACTERS_APP_WITHPAGINATION",
    JSON.stringify(withPagination.value)
  );
});

export function setWithPagination(value: boolean){
  withPagination.value = value
}