import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import ReviewForm from './ReviewForm';

const UserPanel = () => {
  return (
    <div>
      <h2>User Management and Authentication Panel</h2>
      <SignupForm />
      <LoginForm />
      <UserProfile />
      <ReviewForm />
    </div>
  );
};

export default UserPanel;
