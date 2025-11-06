import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vyvuuwclscqxmmhzapuk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dnV1d2Nsc2NxeG1taHphcHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDkwNjgsImV4cCI6MjA3ODAyNTA2OH0.jd3i7CvoJzPtxWhnDbP7WFy_QVULC3BxGzjdwGL_KhY';
export const supabase = createClient(supabaseUrl, supabaseKey);