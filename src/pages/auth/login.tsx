import LoginForm from '@/components/features/Auth/LoginForm';
import AuthLayout from '@/components/layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
