import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables!')
  console.log('Please create a .env file with:')
  console.log('VITE_SUPABASE_URL=your_supabase_url')
  console.log('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/*
 * Database Schema for Supabase
 * 
 * Run this SQL in your Supabase SQL Editor to create the leads table:
 * 
 * CREATE TABLE leads (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT,
 *   message TEXT,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 * 
 * -- Enable Row Level Security
 * ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
 * 
 * -- Allow anonymous inserts (for form submissions)
 * CREATE POLICY "Allow anonymous inserts" ON leads
 *   FOR INSERT
 *   TO anon
 *   WITH CHECK (true);
 * 
 * -- Allow public reads (for admin page)
 * CREATE POLICY "Allow public reads" ON leads
 *   FOR SELECT
 *   TO anon
 *   USING (true);
 * 
 * -- Allow public deletes (for admin page)
 * CREATE POLICY "Allow public deletes" ON leads
 *   FOR DELETE
 *   TO anon
 *   USING (true);
 */