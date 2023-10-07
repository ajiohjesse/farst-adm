import CreatePwdForm from '@/components/features/Auth/CreatePwdForm';
import AuthLayout from '@/components/layouts/AuthLayout';

const CreatePasswordPage = () => {
  return (
    <AuthLayout>
      <CreatePwdForm />
    </AuthLayout>
  );
};

export default CreatePasswordPage;
