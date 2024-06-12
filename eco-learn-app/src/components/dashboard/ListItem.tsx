import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ListItem({
  name,
  story,
}: {
  name: String;
  story: Boolean;
}) {
  return (
    <div className="flex p-1 space-x-3 items-center">
      <div
        className={`size-9 rounded-full ${
          story == true ? "ring-1 ring-defaultgreen" : "ring-0"
        } `}
      >
        <Avatar className="size-9 border-2 border-white">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="capitalize">{name}</h1>
    </div>
  );
}
