import { useToast } from "@/components/ui/use-toast";
import { effect, signal, Signal } from "@preact/signals-react";
import favoriteSound from '../assets/favoriteSound.mp3'

export const viewFavorites: Signal<boolean> = signal(getViewFavorites());

function getViewFavorites() {
  const value = localStorage.getItem("CHARACTERS_APP_VIEWFAVORITES");
  if (value == null) return [];
  return JSON.parse(value);
}

const { toast, dismiss } = useToast()

effect(() => {
  localStorage.setItem(
    "CHARACTERS_APP_VIEWFAVORITES",
    JSON.stringify(viewFavorites.value)
  );
  if (viewFavorites.value === true) {
    toast({ title: "Favorites 🌟", description: "Your favorites characters " })
    new Audio(favoriteSound).play()
  }
  if (viewFavorites.value === false) {
    dismiss()
    new Audio(favoriteSound).pause()
  }
});

export function setViewFavorites(value: boolean) {
  viewFavorites.value = value;
}

// console.log(viewFavorites.value);