import { ThemeProvider } from 'styled-components'
import './App.css'
import { Sheet } from './Components/Sheet'
import { theme } from './Styles/Theme'
import { SaveSenseProf } from './Components/SaveSenseProf'
import { CharacterInfo } from './Components/CharacterInfo'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Sheet>
        <CharacterInfo />
        <SaveSenseProf />
      </Sheet>
    </ThemeProvider>
  )
}

export default App
