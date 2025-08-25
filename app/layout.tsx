import { AlphabetWrapper } from "@/wrapper/alphabet/alphabet-wrapper";
import ProgressBarWrapper from "@/wrapper/progress-bar/progress.bar.wrapper";
import { quicksand } from "@/wrapper/theme/theme";
import ThemeWrapper from "@/wrapper/theme/theme.wrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className} suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ProgressBarWrapper>
            <ThemeWrapper>
              <AlphabetWrapper>
                {children}
                <ToastContainer />
              </AlphabetWrapper>
            </ThemeWrapper>
          </ProgressBarWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
