import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-extralight mb-6">Landing Page</h1>

      <div className="flex flex-wrap gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm bg-gray-200" />
        <Button title="Small Full" styles="text-sm rounded-full bg-gray-200" />

        <Button title="Medium Rounded" styles="text-base rounded-md bg-blue-500 text-white" />
        <Button title="Medium Full" styles="text-base rounded-full bg-blue-500 text-white" />

        
        <Button title="Large Rounded" styles="text-lg rounded-md bg-green-500 text-white" />
        <Button title="Large Full" styles="text-lg rounded-full bg-green-500 text-white" />
      </div>
    </div>
  );
};

export default Landing;
