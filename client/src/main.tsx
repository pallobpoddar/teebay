import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import client, { initializeApolloCache } from "./apollo/apolloClient";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initializeApolloCache().then(() => {
      setInitialized(true);
    });
  }, []);

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <StrictMode>
      <ApolloProvider client={client}>
        <ToastContainer />
        <App />
      </ApolloProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
