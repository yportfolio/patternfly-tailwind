import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Bell } from "lucide-react";

export default function AlertDemo() {
  return (
    <>
      <Alert className="w-[60%]">
        <AlertTitle>
          <Bell className="h-4 w-4" />
          <h5 className="font-medium leading-none tracking-tight">
            Default alert title
          </h5>
        </AlertTitle>

        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="info" className="w-[60%]">
        <AlertTitle>
          <Bell className="h-4 w-4" />
          <h5 className="font-medium leading-none tracking-tight">
            Info alert title
          </h5>
        </AlertTitle>

        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success" className="w-[60%]">
        <AlertTitle>
          <Bell className="h-4 w-4" />
          <h5 className="font-medium leading-none tracking-tight">
            Success alert title
          </h5>
        </AlertTitle>

        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="warning" className="w-[60%]">
        <AlertTitle>
          <Bell className="h-4 w-4" />
          <h5 className="font-medium leading-none tracking-tight">
            Warning alert title
          </h5>
        </AlertTitle>

        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="danger" className="w-[60%]">
        <AlertTitle>
          <Bell className="h-4 w-4" />
          <h5 className="font-medium leading-none tracking-tight">
            Danger alert title
          </h5>
        </AlertTitle>

        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
}
