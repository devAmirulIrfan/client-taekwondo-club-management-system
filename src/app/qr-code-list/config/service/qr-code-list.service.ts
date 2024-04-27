import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/qr-code-list.model';
@Injectable({
  providedIn: 'root'
})
export class QrCodeListService {

  constructor(private http: HttpClient) { }

  getStudentQrList(){
    return this.http.get<Student[]>(`http://localhost:8080/studentMetadata`)
  }
}
