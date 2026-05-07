import { cn } from "@/lib/utils";

export default function App() {
  const isActive = true;
  const isError = false;

  return (
    <button
      className={cn(
        "px-4 py-2 rounded text-white",
        isActive && "bg-blue-500",
        isError && "bg-red-500",
      )}
    >
      Save
    </button>
  );
}
