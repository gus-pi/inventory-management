import Sidebar from '../components/sidebar';

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar currentPath="/dashboard" />
        </div>
    );
};
export default DashboardPage;
