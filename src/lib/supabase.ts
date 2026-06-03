import { createClient } from "@supabase/supabase-js";

// El cliente principal se gestiona en src/integrations/supabase/client.ts
// Este archivo se mantiene para compatibilidad con las importaciones existentes en el proyecto (@/lib/supabase)
// y asegurar que el servidor de desarrollo (Vite) no falle al resolver el dependiente.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
