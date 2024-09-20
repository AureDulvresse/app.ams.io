import z from 'zod'

export const academicInfoSchema = z.object({
  schoolName: z.string().min(1, "Le nom de l'établissement est requis."),
  classId: z.number().min(1, "Veuillez sélectionner une classe."),
  year: z.string().optional(),
});
