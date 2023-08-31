import { Camera } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col m-8 container">
      <div>
        <h2>Button group</h2>
        <div className="space-x-4 flex items-center">
          <Button>Primary</Button>
          <Button size="sm">Primary</Button>
          <Button size="lg">Primary</Button>
          <Button size="icon">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
