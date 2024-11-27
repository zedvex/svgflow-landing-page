import { cn } from '@/lib/utils';

type TagProps = {
  className?: string;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

const Tag = ({ className, children, ...props }: TagProps) => {
  return (
    <div
      className={cn(
        'inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center',
        className,
      )}
      {...props}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default Tag;
