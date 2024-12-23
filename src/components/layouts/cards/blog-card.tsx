import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IBlogCard {
  title: string;
  desc: string;
  url: string;
}

function BlogCard(props: IBlogCard) {
  const { title, desc, url } = props;
  return (
    <Card
      onClick={() => window.open(`https://${url}`, "_blank")}
      className="w-80"
    >
      <CardHeader>
        <CardTitle className="text-base 2xl:text-lg">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export type { IBlogCard };
export { BlogCard };
