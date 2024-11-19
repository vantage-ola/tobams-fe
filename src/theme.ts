import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// colour mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
const theme = extendTheme({
    config,
    fonts: {
        heading: `'Sora', sans-serif`,
        body: `'Sora', sans-serif`,
    },
    colors: {
        nft_black: '#060714',           // Deep Midnight Blue
        nft_white: '#ffffff',            // Pure White
        nft_darkblue: '#2a27c9',         // Deep Indigo
        nft_lightblue: '#514cff',        // Vibrant Electric Blue
        nft_green: '#76decc',            // Soft Seafoam
        nft_red: '#fb4539',              // Bright Coral Red
        nft_pink: '#ea6cbc',             // Soft Magenta
        nft_darkgrey: '#262840',         // Dark Navy Grey
        nft_lightgrey: '#7780a1',        // Slate Blue-Grey

        // Uncommented color variations with descriptive names
        nft_neutral_light: '#dde0e8',    // Soft Lavender Grey
        nft_neutral_lighter: '#f1f1f6',  // Pale Periwinkle
        nft_neutral_palest: '#f2f3f6',   // Whisper White

        // Subtle opacity variations
        nft_accent_blue_subtle: '#2aa7c9', // Teal Blue at 10% opacity
        nft_primary_blue_subtle: '#514cff' // Electric Blue at 15% opacity
    },
    styles: {
        global: {
            body: {
                bg: "nft_black"
            }
        }
    }
})

export default theme;