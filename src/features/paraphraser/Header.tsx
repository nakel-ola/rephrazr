import { cn } from "@/lib/utils";

interface HeaderProps {
  active: number;
  setActive: (value: number) => void;
}

export const Header = (props: HeaderProps) => {
  const { active, setActive } = props;
  const items = ["Normal", "Happy", "Sad", "Angry"];
  return (
    <div className="flex items-center space-x-2 py-2 px-4 ">
      <p className="text-lg font-semibold pr-2">Mood: </p>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "p-2 w-[70px] rounded-lg cursor-pointer",
            active === index ? "bg-primary" : "hover:bg-slate-100"
          )}
          onClick={() => setActive(index)}
        >
          <p
            className={cn(
              "text-center",
              active === index ? "text-white" : "text-black"
            )}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};
