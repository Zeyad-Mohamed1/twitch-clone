import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <Button variant="default">Hello</Button>
      <UserButton />
    </div>
  );
}
