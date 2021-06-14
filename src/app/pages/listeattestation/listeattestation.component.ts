import { Component, OnInit } from '@angular/core';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/_modal/modal.service';

@Component({
  selector: 'app-listeattestation',
  templateUrl: './listeattestation.component.html',
  styleUrls: ['./listeattestation.component.scss']
})
export class ListeattestationComponent implements OnInit {

  public datas: any;
  filterterm: string;
  viewer = 'google';     
  DemoDoc="http://www.africau.edu/images/default/sample.pdf" 
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt" 
  constructor(private dataService: DataService,
    private modalService: ModalService,
    private fileSaver: NgxFileSaverService,) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  public getfilemodal() {
    this.fileSaver.saveUrl(this.DemoDoc, 'contrat');
  }
}
