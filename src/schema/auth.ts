import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email("Votre adresse email est invalide"),
	password: z.string().min(8, "Votre mot de passe doit contenir au moins 8 caractères"),
});

export const RegisterSchema = z.object({
	firstName: z.string().min(2, "Prénom doit contenir au moins 2 caractères"),
	lastName: z.string().min(2, "Nom doit contenir au moins 2 caractères"),
	email: z.string().email("Votre adresse email est invalide"),
	password: z.string().min(8, "Votre mot de passe doit contenir au moins 8 caractères"),
	confirmPassword: z.string().min(8, "Votre mot de passe doit contenir au moins 8 caractères"),
}).refine(data => data.password === data.confirmPassword, {
	message: "Les mots de passe ne correspondent pas",
	path: ["confirmPassword"],
});

export const ForgotPasswordSchema = z.object({
	email: z.string().email("Votre adresse email est invalide"),
});

export const ResetPasswordSchema = z.object({
	oldPassword: z.string().min(8, "Votre mot de passe doit contenir au moins 8 caractères"),
	password: z.string().min(8, "Votre mot de passe doit contenir au moins 8 caractères"),
	confirmPassword: z.string().min(8, "Votre mot de passe doit contenir au moins 8 caractères"),
}).refine(data => data.password === data.confirmPassword, {
	message: "Les mots de passe ne correspondent pas",
	path: ["confirmPassword"],
});

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
export type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordData = z.infer<typeof ResetPasswordSchema>;
