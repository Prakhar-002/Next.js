const Dashboard = () => {
  if (2 < 5) {
    throw new Error("Error in Dashboard");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
