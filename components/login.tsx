import supabasae from "utils/supabase";

const Login = () => {
  const handleLogin = async () => {
    const { error } = await supabasae.auth.signInWithOAuth({ provider: "github" });

    if (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabasae.auth.signOut();

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
