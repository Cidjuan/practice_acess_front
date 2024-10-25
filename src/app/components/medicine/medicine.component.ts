import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medicines: any[] = [];
  newMedicine: any = {
    healthRecord: '',
    description: '',
    manufacturer: '',
    medicineTypePresenter: {
      medicineTypeId: ''
    }
  };
  medicineTypes = [
    { id: "d25bf64e-45d1-4d71-a207-bc942bd54543", value: "ESTUPEFACIENTE" },
    { id: "43c431f9-3e9e-4df9-9c50-005c1344565c", value: "PSICOTROPICO" },
    { id: "1c5bc4a9-1e75-4f07-bb4b-41b3c142ac69", value: "PRECURSOR_QUIMICO" }
  ];
  page: number = 0;
  size: number = 10;

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.medicineService.findAllMedicine(this.page, this.size, '').subscribe(response => {
      this.medicines = response.data;
    });
  }

  onSave(): void {
    this.medicineService.saveMedicine(this.newMedicine).subscribe(response => {
      this.onSearch();
      this.clearForm();
    });
  }

  onDelete(medicineId: string): void {
    this.medicineService.deleteMedicine(medicineId).subscribe(response => {
      this.onSearch(); 
      this.clearForm();  
    });
  }

  updateHealthRecord(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newMedicine.healthRecord = input.value;
  }

  updateDescription(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newMedicine.description = input.value;
  }

  updateManufacturer(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newMedicine.manufacturer = input.value;
  }

  updateMedicineTypeDescription(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedType = this.medicineTypes.find(type => type.value === input.value);
    if (selectedType) {
      this.newMedicine.medicineTypePresenter.medicineTypeId = selectedType.id;
    }
  }

  clearForm(): void {
    this.newMedicine = {
      healthRecord: '',
      description: '',
      manufacturer: '',
      medicineTypePresenter: {
        medicineTypeId: ''
      }
    };
  }
}
