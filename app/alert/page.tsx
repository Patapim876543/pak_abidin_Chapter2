import { AlertInfo } from "@/components/alert";

const TestAlert = () => {
  return (
    <div className="m-10 space-y-4">
      <AlertInfo title="Info Alert" color="sky">
        This is a sky (info) alert.
      </AlertInfo>

      <AlertInfo title="Success Alert" color="green">
        This is a green (success) alert.
      </AlertInfo>

      <AlertInfo title="Warning Alert" color="yellow">
        This is a yellow (warning) alert.
      </AlertInfo>

      <AlertInfo title="Error Alert" color="red">
        This is a red (error) alert.
      </AlertInfo>
    </div>
  );
};

export default TestAlert;
