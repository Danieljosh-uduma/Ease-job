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
    <Card
      onClick={() => onSelect(id)}
      className={`cursor-pointer transition-all duration-200 border-1 rounded-sm 
        hover:border-[#136443] hover:shadow-sm
        ${selected ? "bg-[#F0FDF4] border-[#136443]" : "border-gray-200"}

      `}
    >
      <CardHeader className="text-center">
        <div
          className={
            "w-10 h-10 mx-auto mb-4 flex items-center justify-center transition-colors"
          }
        >
          {icon}
        </div>
        <CardTitle className="mb-3.5">{title}</CardTitle>
        <CardDescription className="max-w-[160px] mx-auto text-sm text-wrap">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default SignUp1Item;
