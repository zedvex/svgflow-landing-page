import { cn } from '@/lib/utils';

type TagProps = {
  className?: string;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

const Tag = ({ className, children, ...props }: TagProps) => {
  return (
    <div className="[perspective:1000px] inline-block">
      <div
        className={cn(
          'relative transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)]',
          className,
        )}
        {...props}
      >
        {/* Front side */}
        <div className="inline-flex border border-[#29abe2] gap-2 text-[#29abe2] px-3 py-1 rounded-full uppercase items-center [backface-visibility:hidden]">
          <span>&#10038;</span>
          <span className="text-sm">{children}</span>
        </div>

        {/* Back side */}
        <div className="inline-flex border border-[#29abe2] gap-2 text-[#29abe2] px-3 py-1 rounded-full uppercase items-center [backface-visibility:hidden] [transform:rotateX(180deg)] absolute top-0 left-0 w-full h-full">
          <span>&#10038;</span>
          <span className="text-sm">{children}</span>
        </div>
      </div>
    </div>
  );
};

export default Tag;
