import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = [
    {
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },
    {
      name: "netsh.exe",
      device: "Targaryen",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      status: "available",
    },
    {
      name: "uxtheme.dll",
      device: "Lanniester",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
      status: "available",
    },
    {
      name: "cryptbase.dll",
      device: "Martell",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
      status: "scheduled",
    },
    {
      name: "7za.exe",
      device: "Baratheon",
      path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
      status: "scheduled",
    },
  ];

  return (
    <div className="App">
      <header>
        <div className="flex c1">Name</div>
        <div className="flex c2">Device</div>
        <div className="flex c3">Path</div>
        <div className="flex c4">Status</div>
      </header>
    </div>
  );
}

export default App;
