// import { useMemo } from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { routes } from './routes';

// function App() {
//     const router = useMemo(() => createBrowserRouter(routes), []);

//     return <RouterProvider router={router} />;
// }

// export default App;

// app.tsx
import { BrowserRouter } from 'react-router-dom';
import Animatedroutes from './components/animated-routes/animated-routes';

function App() {
    return (
        <BrowserRouter>
                <Animatedroutes />
        </BrowserRouter>
    );
}

export default App;