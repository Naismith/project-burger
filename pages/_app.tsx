import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,body, #__next {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  *::after, *::before{
    box-sizing: inherit;
  }
`;

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
