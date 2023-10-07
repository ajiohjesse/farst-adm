import ForgotPwdForm from '@/components/features/Auth/ForgotPwdForm';
import AuthLayout from '@/components/layouts/AuthLayout';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <ForgotPwdForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
