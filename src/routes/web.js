
import Login from "../views/auth/login";
import Bar from "../views/bar";
import Dashboard from "../views/dashboard"

const routes = [
    {
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/foo',
        component: Login,
        auth: true,
        exact: true
    }, {
        path: '/foo/bar',
        component: Bar,
        auth: true,
        exact: true
    }
]

export default routes