import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const ErrorState = ({message} : {message : string}) => {
  return (
    <div>
      {" "}
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>An error occurred</AlertTitle>
        <AlertDescription>
          <p>{message || "Something went wrong. Please try again later."}</p>
        
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ErrorState;
