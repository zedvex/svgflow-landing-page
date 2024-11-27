import { cn } from '@/lib/utils';

import { Button } from './ui/button';

type BtnProps = React.ComponentProps<typeof Button>;

const Btn = ({ children, variant, className }: BtnProps) => {
  return (
    <Button
      variant={variant}
      className={cn('hidden md:block rounded-full h-12 text-base ', className)}
    >
      {children}
    </Button>
  );
};

export default Btn;
