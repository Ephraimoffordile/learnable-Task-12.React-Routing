import { useAuth } from '../contexts/AuthContext';const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboardContent = () => {
    switch (user?.role) {
      case 'Admin':
        return <h2>Admin Dashboard: Admin Controls</h2>;
      case 'Editor':
        return <h2>Editor Dashboard: Content Editor Panel</h2>;
      case 'Viewer':
        return <h2>Viewer Dashboard: Read-only Reports</h2>;
      default:
        return <h2>Dashboard</h2>;
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {renderDashboardContent()}
    </div>
  );
};

export default Dashboard;