import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// eslint-disable-next-line react-refresh/only-export-components -- shadcn pattern: variants exported alongside component
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white hover:bg-primary-600 shadow-sm hover:shadow-primary active:scale-[0.98]',
        gold:
          'bg-gold text-white hover:bg-gold-dark shadow-gold active:scale-[0.98]',
        outline:
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white active:scale-[0.98]',
        'outline-gold':
          'border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white active:scale-[0.98]',
        ghost:
          'hover:bg-primary/10 hover:text-primary active:scale-[0.98]',
        link:
          'text-primary underline-offset-4 hover:underline',
        whatsapp:
          'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-sm active:scale-[0.98]',
      },
      size: {
        default: 'h-10 px-6 py-2 text-sm',
        sm:      'h-8 rounded-md px-4 text-xs',
        lg:      'h-12 rounded-lg px-8 text-base',
        xl:      'h-14 rounded-lg px-10 text-lg',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
