import { CloseIcon, ImageIcon } from '@/components/icons';
import { cn } from '@/utils/cn';
import { useId, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  handleFile?: (file: File | null) => void;
}

const allowedFileTypes = ['image/jpeg', 'image/png'];

const maxFileSize = 50 * 1024 * 1024; // 50MB in bytes

export const ImageInput: React.FC<Props> = ({
  label,
  handleFile,
  ...props
}) => {
  const [file, setLocalFile] = useState<File | null>(null);
  const id = useId();

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();

    setLocalFile(null);
    setPreviewUrl(null);

    previewUrl && URL.revokeObjectURL(previewUrl);

    if (handleFile) {
      handleFile(null);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (allowedFileTypes.includes(selectedFile.type)) {
        if (selectedFile.size <= maxFileSize) {
          setLocalFile(selectedFile);
          setPreviewUrl(URL.createObjectURL(selectedFile));

          if (handleFile) {
            handleFile(selectedFile);
          }
        } else {
          alert('Selected file is too large. Maximum file size is 50MB.');
        }
      } else {
        alert(
          'Selected file type is not allowed. Please select a JPG, JPEG, PNG',
        );
      }
    } else {
      setLocalFile(null);
      setPreviewUrl(null);
    }
  };

  return (
    <div
      data-active={file ? true : false}
      className={cn(
        'relative grid aspect-square h-full w-full place-items-center overflow-hidden rounded-lg border-2 border-dashed bg-neutral-100 p-4',
        file ? 'border-success-500' : '',
      )}
    >
      <div className=''>
        <ImageIcon className='mx-auto' />

        <label htmlFor={id} className='mx-auto block w-fit text-center'>
          {label}
        </label>
      </div>

      <input
        className='absolute inset-0 cursor-pointer opacity-0'
        id={id}
        type='file'
        accept='.jpg,.jpeg,.png,.pdf, .doc, .docx'
        onChange={handleFileChange}
        {...props}
      />

      {file && previewUrl ? (
        <div className='absolute inset-0 bg-inherit'>
          <button
            className='absolute right-1 top-1 text-danger-500'
            title='remove image'
            onClick={handleRemoveImage}
          >
            <CloseIcon />
          </button>

          <div className='absolute inset-5'>
            <img
              src={previewUrl}
              alt=''
              className='h-full w-full object-contain'
            />
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
