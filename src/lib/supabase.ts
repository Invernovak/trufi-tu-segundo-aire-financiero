import { createClient } from '@supabase/supabase-js'

// Estas son las "llaves" de tu proyecto Trufi-Web
const supabaseUrl = 'https://oghwlhvbnegbghkcihos.supabase.co'
const supabaseAnonKey = 'sb_publishable_dfinrlRsMyjhY8tW4NZIfQ_YfKPTqki'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)