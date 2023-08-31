"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchDemo() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Switch
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked)}
      />
      <Label htmlFor="airplane-mode">
        Airplane Mode {isChecked ? "Open" : "Close"}
      </Label>
    </>
  );
}
