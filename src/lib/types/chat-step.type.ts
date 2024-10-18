export type ChatStepType = {
  id: string | number;
  message: string;
  trigger?: string | number;
  delay?: number;
  end: boolean;
  placeholder?: string;
}