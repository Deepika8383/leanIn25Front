import { Background } from "./components/background";
import { Foreground } from "./components/foreground";
import { Navbar } from "./components/navbar";
import { UserPage } from "./pages/userPage";

const App=()=>{
  return(
    <Background>
        <UserPage/>
    </Background>
  );
}
export default App;