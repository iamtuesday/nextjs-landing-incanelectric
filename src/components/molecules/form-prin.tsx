'use client'

import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Textarea } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import * as z from 'zod'

const formSchema = z.object({
	fullname: z.string(),
	email: z.string().email(),
	phoneNumber: z.string().min(10).max(10),
	address: z.string(),
	issue: z.string().optional()
})

export const FormPrin = () => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			fullname: '',
			phoneNumber: '',
			address: '',
			issue: ''
		}
	})

	const isComplete = Object.values(form.getValues()).every(value => value !== '')

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setIsLoading(true)

		try {
			/**
			 * Post data
			 */
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="form-prin">
					<FormField
						control={form.control}
						name="fullname"
						render={({ field }) => (
							<FormItem className="col-span-2">
								<FormControl>
									<Input placeholder="Your Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Your Email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Your Phone Number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Address & Zip Code" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="issue"
						render={({ field }) => (
							<FormItem className="col-span-2">
								<FormControl>
									<Textarea placeholder="Tell us about what service you need" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div>
						<Button type="submit" disabled={!isComplete}>
							Request a Call Back
						</Button>
					</div>
				</form>
			</Form>

			<figure className="form-prin__img">
				<Image
					src="https://tuesdays3.sfo3.digitaloceanspaces.com/paper-plane.png"
					alt="banner-prin"
					width={50}
					height={50}
					priority
				/>
			</figure>
		</>
	)
}
