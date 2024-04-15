import ProtectedPage from "@/components/ProtectedPage";
import Dashboard from "@/components/dashboard/Dashboard";

const Page = () => {
  return (
    <ProtectedPage className="flex-1">
      <Dashboard />
    </ProtectedPage>
  );
};

export default Page;
