import { cn } from '@/lib/utils';

type KeyProps = {
  className?: string;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

const Key = ({ className, children, ...props }: KeyProps) => {
  return (
    <div
      className={cn(
        'size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Key;
