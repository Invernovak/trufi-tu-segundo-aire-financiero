import { supabase } from "@/integrations/supabase/client";

export interface LeadData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje?: string | null;
  acepta_terminos: boolean;
  segmento?: string | null;
}

export const leadService = {
  async createLead(data: LeadData) {
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          mensaje: data.mensaje || '',
          segmento: data.segmento || 'General',
          acepta_terminos: data.acepta_terminos,
        }
      ]);

    if (error) {
      throw error;
    }

    return { success: true };
  }
};

