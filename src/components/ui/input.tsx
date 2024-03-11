import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-[6rem] w-full border-b-[.3rem] border-[#d3d3d3] bg-transparent px-3 py-1 text-[1.4rem] font-unbounded text-[#444]',
				'md:font-medium placeholder:text-muted-foreground focus-visible:outline-none',
				'focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = 'Input'

export { Input }
