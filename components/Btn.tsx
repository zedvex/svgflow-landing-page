import { cn } from '@/lib/utils';

import { Button } from './ui/button';

type BtnProps = React.ComponentProps<typeof Button> & {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
};

const Btn = ({
  children,
  variant,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}: BtnProps) => {
  return (
    <Button
      variant={variant}
      className={cn('rounded-full h-12 text-base', className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Btn;
