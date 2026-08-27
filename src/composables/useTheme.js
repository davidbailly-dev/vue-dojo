import { ref, watch } from 'vue'

export function useTheme() {
    const availableThemes = ['light', 'dark']
    const activeTheme = ref('dark')
    const storedTheme = localStorage.getItem('theme')

    watch(activeTheme, (newValue) => {
        localStorage.setItem('theme', newValue)
    })

    if (!storedTheme || !availableThemes.includes(storedTheme)) {
        localStorage.setItem('theme', activeTheme.value)
    } else {
        activeTheme.value = storedTheme
    }

    function toggleTheme() {
        if (activeTheme.value === 'light') {
            activeTheme.value = 'dark'
        } else {
            activeTheme.value = 'light'
        }
    }

    return { activeTheme, toggleTheme }
}