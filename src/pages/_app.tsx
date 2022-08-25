import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "../layouts/AppLayout";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Wrap the App component with the QueryClientProvider component for React-Query support
// and the AppLayout component for our layout (navbar, footer, etc)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
