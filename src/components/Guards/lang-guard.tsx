import { defaultLocale, locales } from "@/dammyData";
import { Navigate, Outlet, useParams } from "react-router-dom";

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  if (!locales.includes(lang)) {
    return <Navigate to={`/${defaultLocale}`} />;
  }

  return <Outlet />;
};

export default LangGuard;
