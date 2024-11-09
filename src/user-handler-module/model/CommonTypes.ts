export interface MongooseResponseType {
  success: Boolean;
  task: String;
  message?: String;
  access_token?: string;
  auth?: boolean;
  error?: any;
  id?: string;
  data?: { count?: number; body?: [Record<string, any>] };
  requestBody?: Record<string, any>;
}
