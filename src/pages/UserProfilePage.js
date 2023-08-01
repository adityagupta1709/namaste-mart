import NavBar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';

function UserProfilePage() {
  return (
    <div>
      <NavBar>
      <h1 className="mx-auto text-3xl font-bold text-black">My Profile</h1>

        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;