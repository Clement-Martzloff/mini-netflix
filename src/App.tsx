import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Header, MovieDetail, MovieList } from './components'

/**
 * TODO: expand material-ui theme
 */
const theme = createMuiTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MovieList />
      <MovieDetail />
    </ThemeProvider>
  )
}

export default App
