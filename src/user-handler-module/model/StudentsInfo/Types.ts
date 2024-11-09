import mongoose from "mongoose";

export interface StudentsType {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  school_id: string;
  grade: number;
  city: string;
  state: string;
  country: string;
  social_media: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  timestamp?: Date;
}
