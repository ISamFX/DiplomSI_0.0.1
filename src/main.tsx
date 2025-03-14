import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import {store} from "./store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>   
                <App/>
            </Provider>
        </BrowserRouter>                        
    </StrictMode>
);
