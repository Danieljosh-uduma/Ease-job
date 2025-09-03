import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface RoleCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  selected: boolean;
  onSelect: (roleId: string) => void;
}

const SignUp1Item: React.FC<RoleCardProps> = ({
  id,
  title,
  description,
  icon,
  selected,
  onSelect,
}) => {
  return (
    <Card
      onClick={() => onSelect(id)}
      className={`cursor-pointer transition-all duration-200 border-1 rounded-sm 
        hover:border-teal-700 hover:shadow-sm
        ${selected ? "bg-[#F0FDF4] border-[#136443]" : "border-gray-200"}
    min-w-[200px]

      `}
    >
      <CardHeader className="text-center">
        <div
          className={
            "w-12 h-12 mx-auto mb-4 flex items-center justify-center transition-colors"
          }
        >
          {icon}
        </div>
        <CardTitle className="mb-3.5">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {/* If you want extra content under description, put inside <CardContent> */}
      <CardContent></CardContent>
    </Card>
  );
};

export default SignUp1Item;
