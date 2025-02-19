import { Background } from "./components/background";
import { Foreground } from "./components/foreground";
import { Navbar } from "./components/navbar";

const App=()=>{
  return(
    <Background>
      <Foreground>
        <Navbar/>
      </Foreground>
    </Background>
  );
}
export default App;