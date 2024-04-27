import { Component, OnInit } from '@angular/core';
import { QrCodeListService } from './config/service/qr-code-list.service';
import { tap } from 'rxjs';
import { Student } from './config/model/qr-code-list.model';
@Component({
  selector: 'app-qr-code-list',
  templateUrl: './qr-code-list.component.html',
  styleUrls: ['./qr-code-list.component.scss']
})
export class QrCodeListComponent implements OnInit{

  qrList: Student[] = []

  constructor(private service: QrCodeListService){
  }
  ngOnInit() {
    this.service.getStudentQrList().pipe(tap((response) => {
      this.qrList = response
    })).subscribe()
  }

}
