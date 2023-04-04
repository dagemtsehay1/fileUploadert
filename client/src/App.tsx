import FilesList from "./components/files-list";
import Header from "./components/header";
import UploadFile from "./components/upload-file";

function App() {
  return (
    <div className="w-3/5 m-auto">
      <Header/>
      <UploadFile/>
      <FilesList/>
    </div>
  );
}

export default App;
