import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Profile from '../../components/profile/Profile';

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <Profile />
    </div>
  );
};

export default Hotel;
