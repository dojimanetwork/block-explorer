import { mount, route } from "navi";
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/index"))


export default mount({
    '/': route({
        view: <HomePage/>
    }),

})