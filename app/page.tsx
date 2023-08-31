import { ModeToggle } from "@/components/theme/ModeToggle";
import AccordionDemo from "./components/AccordionDemo";
import ButtonDemo from "./components/ButtonDemo";
import AlertDemo from "./components/AlertDemo";
import SwitchDemo from "./components/SwitchDemo";
import { TooltipDemo } from "./components/TooltipDemo";
import { SliderDemo } from "./components/SliderDemo";
import { SkeletonDemo } from "./components/SkeletonDemo";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col m-8 container space-y-12">
      <ModeToggle />

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Button
        </h2>
        <div className="space-x-4 flex items-center">
          <ButtonDemo />
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

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Switch
        </h2>

        <div className="flex items-center space-x-4">
          <SwitchDemo />
        </div>
      </div>

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Slider
        </h2>

        <div className="flex items-center">
          <SliderDemo />
        </div>
      </div>

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Skeleton
        </h2>

        <div className="flex items-center space-x-4">
          <SkeletonDemo />
        </div>
      </div>

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Tooltip
        </h2>

        <div className="flex items-center">
          <TooltipDemo />
        </div>
      </div>

      <div className="flex flex-col justify-start w-full space-y-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Alert
        </h2>
        <div className="space-y-4 flex flex-col">
          <AlertDemo />
        </div>
      </div>
    </main>
  );
}
