import { Button } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';

type PrimaryButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      disabled={disabled}
      isLoading={loading}
    >
      {children}
    </Button>
  );
};

export default memo(PrimaryButton);
