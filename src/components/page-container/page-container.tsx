import mainStyle from "@/style/index.module.css";

export const PageContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <main className={mainStyle["root"]}>{children}</main>;
};
