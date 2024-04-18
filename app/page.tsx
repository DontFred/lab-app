import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen text-base">
      <div className="relative mx-auto grid w-full max-w-8xl gap-6 px-5 py-40">
        <div className="place-self-center p-6">
          <Badge variant="inverted">Grey</Badge>
        </div>
        <div className="place-self-center p-6">
          <Badge content="New" variant="inverted">
            <Button>Click Me</Button>
          </Badge>
        </div>
      </div>
    </div>
  );
}
