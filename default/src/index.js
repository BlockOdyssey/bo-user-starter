import React from 'react';

import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import App from 'app/App';
import store from 'app/store';

import '@fontsource/noto-sans-kr/300.css'; // Light
import '@fontsource/noto-sans-kr/400.css'; // Regular
import '@fontsource/noto-sans-kr/500.css'; // Medium
import '@fontsource/noto-sans-kr/700.css'; // Bold
import 'styles/main.scss';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
