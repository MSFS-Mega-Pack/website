import { createMuiTheme, colors, responsiveFontSizes } from '@material-ui/core'

export default responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'Poppins',
      fontSize: 18,
      htmlFontSize: 18,
      allVariants: {
        lineHeight: 1.3,
      },
      body1: { lineHeight: 1.5 },
      body2: { lineHeight: 1.5 },
      h1: { fontWeight: 'bold' },
      h2: { fontWeight: 'bold' },
      h3: { fontWeight: 'bold' },
    },
    palette: {
      type: 'dark',
      primary: colors.amber,
      secondary: colors.pink,
      text: {
        secondary: colors.grey[500],
      },
    },
    props: {
      MuiButton: {
        variant: 'contained',
        color: 'primary',
      },
    },
    overrides: {
      MuiTypography: {
        gutterBottom: {
          marginBottom: 'calc(0.2em + 8px)',
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 8,
        },
        root: {
          background: 'rgba(0, 0, 0, 0.6)',
          borderColor: 'black',
        },
      },
      MuiCard: {
        root: {
          background: 'rgba(0, 0, 0, 0.6)',
          borderColor: 'black',
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: '#1d1d36',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23363659' fill-opacity='0.3'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        },
      },
      MuiTableRow: {
        hover: {
          backgroundColor: 'rgba(255, 255, 255, 0.01)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04) !important',
          },
        },
      },
      MuiButton: {
        root: {
          fontWeight: 600,
        },
      },
    },
  }),
  { factor: 1.8 }
)
