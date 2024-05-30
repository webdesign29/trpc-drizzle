"use client";
import * as React from "react"
import Link from "next/link"

import { FilmIcon } from "@heroicons/react/24/solid"
import {
	NavigationMenu, NavigationMenuContent,
	NavigationMenuItem, NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from '~/lib/utils.ts';
import { useContext } from 'react';
import { AppContext, AppStoreProps } from '~/store.ts';
import { useStore } from 'zustand';

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean

	children?: {
		title: string
		href: string
		external?: boolean
		description?: string
	}[]
}

interface MainNavProps {
	items?: NavItem[]
}
// { items }: MainNavProps
export function MainNav() {
	const store = useContext(AppContext);
	if (!store) throw new Error('Missing AppContext.Provider in the tree');
	const appStore = useStore(store, (s: AppStoreProps) => s.APP);

	const items = appStore?.MAIN_NAV;

	return (
		<div className="hidden gap-6 lg:flex">
			<Link href="/" className="hidden items-center space-x-2 lg:flex">
				<FilmIcon className="h-6 w-6"/>
				<span className="hidden font-bold lg:inline-block">
          {appStore.NAME}
        </span>
				<span className="sr-only">Home</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					{items?.[0]?.children ? (
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-auto">
								{items[0].title}
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<Link
												href="/"
												className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											>
												<FilmIcon className="size-6" aria-hidden="true"/>
												<div className="mb-2 mt-4 text-lg font-medium">
													{appStore.NAME}
												</div>
												<p className="text-sm leading-tight text-muted-foreground">
													{/*{siteConfig.description}*/}
												</p>
												<span className="sr-only">Home</span>
											</Link>
										</NavigationMenuLink>
									</li>
									{items[0].children.map((item) => (
										<ListItem
											key={item.title}
											title={item.title}
											href={item.href}
										>
											{item.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					) : null}
					{items
						?.slice(1)
						.map((item) =>
							item?.children ? (
								<NavigationMenuItem key={item.title}>
									<NavigationMenuTrigger className="h-auto capitalize">
										{item.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{item.children.map((item) => (
												<ListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							) : (
								item.href && (
									<NavigationMenuItem key={item.title}>
										<Link href={item.href} legacyBehavior passHref>
											<NavigationMenuLink
												className={cn(navigationMenuTriggerStyle(), "h-auto")}
											>
												{item.title}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								)
							)
						)}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					href={String(href)}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"