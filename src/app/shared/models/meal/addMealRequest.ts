export interface AddMealRequest {
  chiefId: string;
  name: string;
  description: string;
  images: FileList | null;
}
