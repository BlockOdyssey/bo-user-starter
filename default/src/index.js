import App from "app/App";
import store from "app/store";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import "style/index.scss";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <App />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
