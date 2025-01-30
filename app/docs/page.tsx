import { Documentation } from "@/components/documentation";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h1 className={title()}>Docs</h1>
      <Documentation />
    </div>
  );
}
