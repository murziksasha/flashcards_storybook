import { Button } from "./components/ui";


export function App() {
  return (
    <div>
      <Button as="a" href="https://www.google.com" variant="primary">
        button555
      </Button>
      <br />
      <br />
      <br />
      <Button variant="secondary">
        secondary
      </Button>
    </div>
  );
}
