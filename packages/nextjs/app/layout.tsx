import "@rainbow-me/rainbowkit/styles.css";
import Menu from "~~/components/Menu";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Scaffold-ETH 2 App",
  description: "Built with 🏗 Scaffold-ETH 2",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>
            <div className="w-full max-w-md h-[812px] bg-white overflow-hidden flex flex-col shadow-xl rounded-3xl">
              <main className="flex-grow overflow-y-auto scrollbar-hide">{children}</main>
              <div className="sticky bottom-0 w-full flex justify-center items-center">
                <Menu />
              </div>
            </div>
          </ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
