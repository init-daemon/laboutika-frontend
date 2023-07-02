import { ThemeDefinition } from 'vuetify'

export const appLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FEFEFE',
    surface: '#FFF',
    primary: '#3F51B5',
    'primary-darken-1': '#173372',
    secondary: '#071126',
    'secondary-darken-1': '#071126',//inchangé
    error: '#FF1A3B',
    info: '#FF1A3B',
    success: '#009688',
    warning: '#FFA51F',
  },
}


export const materialHightContrast: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#000000',
    'primary-darken-1': '#000000',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}