import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  // State to hold the profile
  const [user, setUser] = useState<{ profile?: { name: string } }>({});
  // State to toggle the visibility of the profile
  const [showProfile, setShowProfile] = useState(false);

  // Track re-render status for different actions
  const [renderMessage, setRenderMessage] = useState<string>('');

  // Log when the component renders
  useEffect(() => {
    console.log("Component re-rendered");
  });

  // Log changes for `?.` (Optional Chaining) when profile data changes
  useEffect(() => {
    if (user.profile) {
      console.log("Re-rendered due to profile change (using `?.`)", user.profile);
      setRenderMessage('Re-rendered with ?. due to profile data change.');
    }
  }, [user.profile]); // This tracks profile changes for `?.`

  // Log changes for `&&` (Logical AND) when profile visibility changes
  useEffect(() => {
    if (showProfile) {
      console.log("Re-rendered due to profile visibility change (using `&&`)");
      setRenderMessage('Re-rendered with && due to profile visibility change.');
    }
  }, [showProfile]); // This tracks visibility changes for `&&`

  // Toggle profile (show or hide it)
  const toggleProfile = () => {
    console.log("Toggling profile visibility");

    // Update profile only if visibility changes
    if (showProfile) {
      // If profile was visible, clear the profile
      setUser({}); // Clear the profile
    } else {
      // Set the profile if not visible
      setUser((prevUser) => {
        if (!prevUser.profile) {
          return { profile: { name: "Alex" } }; // Only update if profile is not already set
        }
        return prevUser; // No update if profile is already set
      });
    }

    setShowProfile(!showProfile);
  };

  // Update the profile name dynamically
  const updateProfileName = () => {
    if (user.profile) {
      const newName = user.profile.name === "Alex" ? "John" : "Alex";
      console.log("Updating profile name to:", newName);
      setUser({ profile: { name: newName } }); // Change the profile name
    }
  };

  console.log("Current user profile:", user.profile);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Re-render Behavior: `?.` vs `&&`</h1>

      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      <button onClick={updateProfileName}>
        Update Profile Name
      </button>

      <h2>Using `?.` (Optional Chaining):</h2>
      <div>
        {/* Using optional chaining */}
        {user.profile?.name ? (
          <p>Profile: {user.profile.name}</p>
        ) : (
          <p>No Profile Found</p>
        )}
      </div>

      <h2>Using `&&` (Logical AND):</h2>
      <div>
        {/* Using logical AND */}
        {user.profile && <p>Profile: {user.profile.name}</p>}
        {!user.profile && <p>No Profile Found</p>}
      </div>

      <h3>Re-render Details:</h3>
      <p>{renderMessage}</p>

      <div>
        <h3>Differences:</h3>
        <ul>
          <li>
            <strong>?. (Optional Chaining)</strong> will only trigger a re-render when the profile data actually changes (e.g., changing the name).
            Toggling visibility without changing the profile data will not trigger a re-render.
          </li>
          <li>
            <strong>&& (Logical AND)</strong> will cause a re-render every time the visibility state changes, even if the profile data hasn't changed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
