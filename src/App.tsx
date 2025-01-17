import { Sidebar } from "./sidebar/Sidebar";

export function App() {
  return (
    <>
      <div className="absolute w-full h-full bg-zinc-700">
        <Sidebar />
      </div>
    </>
  );
}
