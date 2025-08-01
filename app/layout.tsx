import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import ThemeWrapper from "@/wrapper/theme/theme.wrapper";
import { quicksand } from "@/wrapper/theme/theme";
import ProgressBarWrapper from "@/wrapper/progress-bar/progress.bar.wrapper";
import { AlphabetWrapper } from "@/wrapper/alphabet/alphabet-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className}>
        <AppRouterCacheProvider>
          <ProgressBarWrapper>
            <ThemeWrapper>
              <AlphabetWrapper>
                {children}
              </AlphabetWrapper>
            </ThemeWrapper>
          </ProgressBarWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
