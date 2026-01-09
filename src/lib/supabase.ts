/**
 * ✨ built by nich
 * 🌐 GitHub: github.com/nirholas
 * 💫 Building the future, one commit at a time 🌟
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Initialize Supabase client (only if configured)
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : createClient('https://placeholder.supabase.co', 'placeholder-key', {
      auth: { persistSession: false },
    });

// Check if Supabase is properly configured
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Database types
export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  code: string;
  language: string;
  category: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  share_token?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}
