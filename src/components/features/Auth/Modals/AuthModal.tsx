import { logoIcon, logoText } from '@/assets/images';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import Image from 'next/image';

interface AuthModalProps {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = props => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange} modal>
      <DialogContent className='w-[90%] max-w-[642px]'>
        <DialogHeader>
          <div className='mb-4 flex flex-col items-center justify-center'>
            <Image src={logoIcon} alt='farscart logo icon' width={78} />
            <Image src={logoText} alt='farscart logo text' width={214} />
          </div>

          <DialogTitle className='text-2xl'>{props.title}</DialogTitle>

          <DialogDescription>{props.content}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
