import React from "react";
import "./index.css";
import PlanCard from "./PlanCard";

function App() {
  return (
    <div className="flex flex-col items-center bg-black p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-white">Pricing</h1>
        <p className="text-lg text-white">
          Choose the right pricing for you and get started working on your
          project
        </p>
      </div>
      <div className="flex flex-col gap-8 p-10 xl:flex-row">
        <PlanCard
          color="#78E3FC"
          name="Basic"
          description="Get started with the basic plan"
          features={["1 User"]}
        />
      </div>
    </div>
  );
}

export default App;
