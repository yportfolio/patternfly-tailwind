import React from "react";
import { Button } from "../../components/ui/button";
import { Camera } from "lucide-react";

export default function ButtonDemo() {
  return (
    <>
      <Button>Primary</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Camera className="h-4 w-4" />
      </Button>
    </>
  );
}
