const UserProfile = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>User Profile: {id}</h1>
    </div>
  );
};

export default UserProfile;
