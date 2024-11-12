import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { register } from "../../store/Users/RegisterUser";
import { Users } from "../../types/typeUser";


const SingUp:FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { error, status } = useSelector((state: RootState) => state.Register);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('הסיסמאות אינן תואמות')
      navigate("/");
    }
    if (status === "idle" && userName && password) {
      const NewUser: Users = {
        username: userName,
        password: password,
        isAdmin: false
      };
      dispatch(register(NewUser));
    }
  };

  useEffect(() => {
    if (status == "rejected" || error) {
      navigate("/");
    } else if (status == "fulfilled") {
      navigate("/listCandidates" , { state: { userName } });
    }
  }, [status]);

  return (
    <div className="login-container">
        <h2>הרשמה</h2>
        {error && <h3 className="error-message">{error}</h3>}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="שם משתמש" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
            <input type="password" placeholder="סיסמה"value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <input type="password" placeholder="אימות סיסמה" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <button type="submit">הירשם</button>
        </form>
        <button className="signup-button">
            <Link to="/">לעמוד ההתחברות</Link>
        </button>
    </div>
);
}

export default SingUp 