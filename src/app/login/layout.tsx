export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen content-center place-items-center bg-[url(/background-pattern.png)] bg-cover">{children}</div>
  );
}
