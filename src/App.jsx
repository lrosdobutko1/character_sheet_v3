import { ThemeProvider } from "styled-components";
import "./App.css";
import { Sheet } from "./Components/Sheet";
import { theme } from "./Styles/Theme";
import { SaveSenseProf } from "./Components/SaveSenseProf";
import { CharacterInfo } from "./Components/CharacterInfo";
import { Skills } from "./Components/Skills";
import { Inventory } from "./Components/Inventory";
import { RowContainer } from "./Components/RowContainer";
import { Stats } from "./Components/Stats";
import { characterInformation, characterClass, statBlock } from "./Data/data";
import { Saves } from "./Components/Saves";
import { Senses } from "./Components/Senses";
import { skills } from "./Data/data";
import { InventoryTable } from "./Components/Inventory";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sheet>
        <CharacterInfo
          characterInformation={characterInformation}
          characterClass={characterClass}
        />
        <Stats 
        stats={statBlock} 
        />
        <RowContainer>
          <SaveSenseProf>
            <Saves 
            stats={statBlock}
            />
            <Senses
            stats={statBlock} 
            />
          </SaveSenseProf>
          <Skills skills={skills}/>
          <InventoryTable />
        </RowContainer>
      </Sheet>
    </ThemeProvider>
  );
}

export default App;
