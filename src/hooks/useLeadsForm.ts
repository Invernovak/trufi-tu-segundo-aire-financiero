import { useState } from "react";
import { toast } from "sonner";
import { leadService, LeadData } from "@/services/leadService";

interface UseLeadsFormProps<T> {
  schema: any;
  initialValues: T;
  segmento: string;
}

export const useLeadsForm = <T extends Record<string, any>>({ schema, initialValues, segmento }: UseLeadsFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleInputChange = (field: keyof T, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof T, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof T;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      toast.error("Por favor corrige los errores en el formulario");
      return false;
    }

    setIsSubmitting(true);

    try {
      const leadData: LeadData = {
        nombre: (formData as any).nombre,
        email: (formData as any).email,
        telefono: (formData as any).telefono,
        cedula: (formData as any).cedula,
        mensaje: (formData as any).mensaje,
        acepta_terminos: (formData as any).aceptaTerminos,
        segmento: segmento,
      };

      await leadService.createLead(leadData);

      setErrors({});
      toast.success("¡Gracias! Hemos recibido tus datos con éxito.");
      setFormData(initialValues);
      return true;


    } catch (error: any) {
      console.error('Error en el envío de leads:', error);
      toast.error("Hubo un error al procesar tu solicitud", {
        description: error.message || "Por favor intenta nuevamente más tarde.",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    errors,
  };
};
