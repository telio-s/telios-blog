"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogTab from "./layouts/tabs/BlogTab";
import ProjectTab from "./layouts/tabs/ProjectTab";

export default function BodyContent() {
  const PROJECT_TAB = "project";
  const BLOG_TAB = "blog";
  return (
    <div className="py-6 px-10 flex justify-center">
      <Tabs defaultValue={PROJECT_TAB} className="w-full">
        <div className="w-full flex justify-evenly">
          <TabsList>
            <TabsTrigger className="w-[200px]" value={PROJECT_TAB}>
              Project
            </TabsTrigger>
            <TabsTrigger className="w-[200px]" value={BLOG_TAB}>
              Blog
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="p-4">
          <TabsContent value={PROJECT_TAB}>
            <ProjectTab />
          </TabsContent>
          <TabsContent value={BLOG_TAB}>
            <BlogTab />
          </TabsContent>
        </div>
      </Tabs>

      {/* <BlogCard /> */}
    </div>
  );
}
