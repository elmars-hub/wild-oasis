import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzbyofuwfzekangmykls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6YnlvZnV3Znpla2FuZ215a2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0ODA5NjIsImV4cCI6MjA2ODA1Njk2Mn0.Mgjz11CFe56cEpzHBSNqG985CghN2RxWglGOtrkXu_k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
