import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

const outline = defineStyle({
    border: '2px dashed', // change the appearance of the border
    borderRadius: 0, // remove the border radius
    fontWeight: 'semibold', // change the font weight
})

const buttonTheme = defineStyleConfig({
    variants: { outline },
})

export const theme = extendTheme({
    components: { Button: buttonTheme },
});