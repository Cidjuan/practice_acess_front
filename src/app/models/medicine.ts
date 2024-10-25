export interface Medicine {
    medicineId?: string;
    healthRecord?: string;
    description?: string;
    manufacturer?: string;
    medicineTypePresenter?: {
      medicineTypeId?: string;
      description?: string;
    };
  }
  