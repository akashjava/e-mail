import "./App.css";
import SearchAppBar from "./Appbar";
import background from "./assets/background.jpg";
import AppSideBar from "./AppSideBar";
import AppDetailContainer from "./AppDetailContainer";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <SearchAppBar></SearchAppBar>
      <div style={{ display: "flex"}}>
        <div style={{ padding: "10px", width: "5%" }}>
         <AppSideBar></AppSideBar>
        </div>
        <div style={{width: "90%",height:'90vh' }}>
          <AppDetailContainer></AppDetailContainer>
        </div>
        <div style={{ padding: "10px 5px", width: "5%",borderLeft:'1px solid gray' }}>
        </div>
      </div>
    </div>
  );
}

export default App;
