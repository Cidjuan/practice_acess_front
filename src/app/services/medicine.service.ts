import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from '../models/paginator';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  saveMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.apiUrl}/save`, medicine);
  }

  findAllMedicine(page: number, size: number, search: string): Observable<Paginator> {
    return this.http.get<Paginator>(`${this.apiUrl}/medicineBySearch?page=${page}&size=${size}&search=${search}`);
  }

  deleteMedicine(medicineId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteMedicine?medicineId=${medicineId}`);
  }

}
