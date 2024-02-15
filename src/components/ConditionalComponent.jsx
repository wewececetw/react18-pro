import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  const display = false;
  let message;
  if (display) {
    message = <Welcome />;
  } else {
    message = <Code />;
  }
  return <div>{message}</div>;
}
