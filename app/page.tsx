import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";
import AccordionDemo from "./components/AccordionDemo";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col m-8 container space-y-12">
      <ModeToggle />

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Button group
        </h2>
        <div className="space-x-4 flex items-center">
          <Button>Primary</Button>
          <Button size="sm">Primary</Button>
          <Button size="lg">Primary</Button>
          <Button size="icon">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Accordion
        </h2>
        <div className="space-x-4 flex items-center">
          <AccordionDemo />
        </div>
      </div>
    </main>
  );
}
