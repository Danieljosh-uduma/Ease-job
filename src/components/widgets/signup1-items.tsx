import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface RoleCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  selected: boolean;
  onSelect: (roleId: string) => void;
}

function SignUp1Item({
  id,
  title,
  description,
  icon,
  selected,
  onSelect,
}: RoleCardProps) {
  return (
    <>
      {/* 📱 Mobile Version (visible only on small screens) */}
      <div
        onClick={() => onSelect(id)}
        className={`cursor-pointer transition-all duration-200 border rounded-lg p-2.5 mb-3 block md:hidden
          ${
            selected
              ? "bg-[#F0FDF4] border-[#136443]"
              : "bg-white border-[#B8B8B8] hover:border-gray-300"
          }
        `}
      >
        <div className="flex items-center ">
          {/* Radio button */}
          <div className="flex-shrink-0 mr-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
              ${selected ? " border-[#136443]" : "border-[#B8B8B8]"}
                  hover:border-[#136443] hover:shadow-sm

            `}
            >
              {selected && (
                <div className="w-2 h-2 bg-[#136443] rounded-full"></div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm ">{description}</p>
          </div>
        </div>
      </div>

      {/* 🖥️ Desktop Version (visible only on md+ screens) */}
      <Card
        onClick={() => onSelect(id)}
        className={`cursor-pointer transition-all duration-200 border-1 rounded-sm hidden md:block
          hover:border-[#136443] hover:shadow-sm
          ${selected ? "bg-[#F0FDF4] border-[#136443]" : "border-[#B8B8B8]"}
        `}
      >
        <CardHeader className="text-center">
          <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center transition-colors">
            {icon}
          </div>
          <CardTitle className="mb-3.5">{title}</CardTitle>
          <CardDescription className="max-w-[160px] mx-auto text-sm text-wrap">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}

export default SignUp1Item;
