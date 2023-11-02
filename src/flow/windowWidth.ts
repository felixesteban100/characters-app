import { effect, signal } from '@preact/signals-react'

export const windowWidth = signal(window.innerWidth)

effect(() => {
    windowWidth.value = window.innerWidth
})

window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
});