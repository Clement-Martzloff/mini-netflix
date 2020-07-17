import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
import { Header, NavMenu, Content } from './components'
import { DrawerContextProvider } from './contexts/DrawerContext'

/**
 * TODO: expand material-ui theme
 */
const theme = createMuiTheme({})
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <DrawerContextProvider>
          <Header />
          <NavMenu />
          <Content />
        </DrawerContextProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
