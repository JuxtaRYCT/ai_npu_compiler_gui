import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import { Home } from "lucide-react";
import { AuthProvider } from "./context/authContext";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./screens/Dashboard";
import Quantization from "./screens/QuantizationwithEdge";
import EdgeInference from "./screens/EdgeInference";
import NetworkAdaptation from "./screens/NetworkAdaptation";
import Visualisation from "./screens/Visualisation";
import Netron from "./screens/Netron";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/quantize" element={<Quantization />}></Route>
        <Route path="/networkadapt" element={<NetworkAdaptation />}></Route>
        <Route path="/edgeinference" element={<EdgeInference />}></Route>
        <Route path="/visualise" element={<Visualisation />}></Route>
        <Route path="/layers" element={<Netron />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
