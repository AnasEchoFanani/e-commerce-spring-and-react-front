import {Route, Routes} from "react-router-dom";
import AdminDashboard from "@/pages/dashboard/AdminDashboard.jsx";
import AdminLayout from "@/component/layout/AdminLayout.jsx";

function App() {
    return (<>
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route path="/dashboard" element={<AdminDashboard />} />
            </Route>
        </Routes>
    </>)
}

export default App