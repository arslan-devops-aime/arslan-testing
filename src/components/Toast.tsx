import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { ToastAttributes } from './common/models';

interface ToastProps {
  toastData: ToastAttributes;
  onClose: () => void;
}

export default function Toast({ toastData, onClose }: ToastProps) {
  const toast = useToast();

  useEffect(() => {
    const showToast = () => {
      const { title, description, status } = toastData;

      toast({
        title: title,
        description: description ?? '',
        status: status ?? 'success',
        duration: 2000,
        isClosable: true,
        onCloseComplete: onClose, // Assuming onCloseComplete is a function passed as onClose prop
      });
    };

    showToast();
  }, [toast, toastData, onClose]); // Include dependencies in the dependency array

  return <></>;
}
