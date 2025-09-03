import { ThemeProvider } from 'styled-components'
import './App.css'
import { Sheet } from './Components/Sheet'
import { theme } from './Styles/Theme'
import { SaveSenseProf } from './Components/SaveSenseProf'
import { CharacterInfo } from './Components/CharacterInfo'
import { Skills } from './Components/Skills'
import { Inventory } from './Components/Inventory'
import { RowContainer } from './Components/RowContainer'
import { Stats } from './Components/Stats'
import { initiative, moveSpeed, statBlock } from './Data/data'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Sheet>
        <CharacterInfo />
        <Stats 
        stats={statBlock}
        initiative={initiative}
        moveSpeed={moveSpeed} />
        <RowContainer>
          <SaveSenseProf />
          <Skills />
          <Inventory />
        </RowContainer>
      </Sheet>
    </ThemeProvider>
  )
}

export default App
