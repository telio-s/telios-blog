import { IBlogCard, BlogCard } from "../cards/blog-card";

const blogList: IBlogCard[] = [
  {
    title:
      "อธิบาย Serverless และ AWS Lambda [ฉบับคนไม่เคยแตะ Cloud และ Deploy code สักครั้ง] Part 1",
    desc: "การใช้งาน AWS Lambda",
    url: "telios.medium.com/อธิบาย-serverless-และ-aws-lambda-ฉบับคนไม่เคยแตะ-cloud-และ-deploy-code-สักครั้ง-part-1-2086905afb62",
  },
];

export default function BlogTab() {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3">
      {blogList.map((item, key) => (
        <BlogCard key={key} {...item} />
      ))}
    </div>
  );
}
