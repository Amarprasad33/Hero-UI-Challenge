import { Card, CardFooter, Image, Button, cn } from "@heroui/react";

export default function BlurredFooterCard({ className = "" }) {
  return (
    <Card
      isFooterBlurred
      className={cn("border border-[#1B1B1B]/84 w-fit", className)}
      radius="lg"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/botChat.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Quantum plus</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Upgrade
        </Button>
      </CardFooter>
    </Card>
  );
}
