import React, { useRef, ChangeEvent } from "react";

type UseInput = (
  initialValue: string
) => [string, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput: UseInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        ref={passwordRef}
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
