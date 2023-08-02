export const metadata = {
  title: 'Crypt-Wallet - Welcome!',
  description: "Welcome to your personal Crypt-Wallet!",
};

export default function RootLeyout({children}) {
  return (
    <html lang="pt-BR">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};
