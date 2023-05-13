import { MantineProvider, Text } from '@mantine/core';
import { default as Navbar } from './components/navbar';
import { BrowserRouter, HashRouter, Router, Routes, Route } from "react-router-dom";
import { Projects } from "./components/Projects";
import { Home } from "./components/Home";
import { CV } from "./components/CV";
import { NotFound } from "./components/NotFound";



export default function App() {

  return (
    <>

      <Navbar  />
      <div> 
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Projects" element={<Projects />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
      </div>
    </>
  );
}

//   <Navbar links={[{ link: "/", label: "Leonardo Chen" }, { link: "/Projects", label: "Projects" }, { link: "/CV", label: "CV" }]} />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/Projects" element={<Projects />} />
    //     <Route path="/CV" element={<CV />} />
    //   </Routes>