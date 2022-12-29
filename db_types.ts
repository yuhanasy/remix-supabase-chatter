export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: string
          created_at: string
          content: string
        }
        Insert: {
          id?: string
          created_at?: string
          content: string
        }
        Update: {
          id?: string
          created_at?: string
          content?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: string
          created_at: string
          content: string
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          content: string
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          content?: string
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
