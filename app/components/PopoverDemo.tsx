import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { X } from "lucide-react";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Popover header</h4>
            <PopoverClose
              aria-label="close"
              className="hover:bg-primary/5 rounded-full p-2"
            >
              <X />
            </PopoverClose>
          </div>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Popovers are triggered by click rather than hover.
          </p>

          <p className="text-sm font-medium leading-none">Popover footer.</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
