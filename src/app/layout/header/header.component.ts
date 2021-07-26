import { Component, HostListener, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/service/pagination.service';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/sidenav/sidenav.service';
import { ModalService } from 'src/app/_modal/modal.service';
import {OthersService} from '../../services/others.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selected = 0;
  messageError;
  successRequest;
  selected1 = 0;
  public click: any;
  filterterm: string;
  dataInterFin;
  scrHeight:any;
  scrWidth:any;
  side = false;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        //console.log(this.scrHeight, this.scrWidth);
  }
  donneesSearch;
  moisSelect
  demandeForm: FormGroup;
  name;
  public menus: any;
  prenom;
  constructor(private modalService: ModalService, 
    private sidenavService: SidenavService,
    private authService: AuthService,
    private paginationService: PaginationService,
    private otherService: OthersService,
    private route: Router) {
    this.getScreenSize(); 
    this.menus = this.paginationService.getMenu();
  }

  navigate(item, id) {
    //console.log(item.path);
    if(item.path) {
      this.sidenavService.close(id);
      this.side = false;
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
    
  }

  closeModal(id: string) {
    this.modalService.close(id);
    
  }
  openSidenav(id: string) {
    this.sidenavService.open(id);
    this.side = true;
    console.log(this.menus);
    
  }

  closeSidenav(id: string) {
    this.sidenavService.close(id);
    this.side = false;
  }

  ngOnInit() {
    this.prenom = localStorage.getItem('prenom');
    this.demandeForm = new FormGroup({
      prenom: new FormControl (''),
      nom: new FormControl(''),
      matricule: new FormControl (''),
      email: new FormControl(''),
      direction: new FormControl (''),
      departement: new FormControl(''),
      service: new FormControl (''),
      agence: new FormControl(''),
      annee: new FormControl (''),
      poste: new FormControl(''),
    });
  }
  onSubmit() {
    const info = {
      prenom: this.demandeForm.value.prenom,
      nom: this.demandeForm.value.nom,
      email: this.demandeForm.value.email,
      // matricule: this.demandeForm.value.matricule,
      // direction: this.demandeForm.value.direction,
      // departement: this.demandeForm.value.departement,
      // service: this.demandeForm.value.service,
      // agence: this.demandeForm.value.agence,
      // annee: this.demandeForm.value.annee,
      // poste: this.demandeForm.value.poste,
    }
    console.log(info);
    this.otherService.rechercheAvance(info).subscribe(
      data => {
        console.log(data);
        this.donneesSearch = data
        this.successRequest = this.donneesSearch.success
        if(this.successRequest == true) {
          this.closeModal('custom-modal-50')
          this.route.navigate(['/accueil/detailinter'], {
            queryParams: {
              user: JSON.stringify(this.donneesSearch['data'][0].id)
            }
          });
        } else {
          this.messageError = this.donneesSearch.message;
        }
      }
    )
  }

  logout() {
    localStorage.removeItem("currentUse");
    localStorage.removeItem('user');
    localStorage.removeItem('prenom');
    localStorage.removeItem('token');
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('color3');
    localStorage.removeItem('colora');
    localStorage.removeItem('colorb');
    localStorage.removeItem('colorc');
    this.authService.logout();
  }
  updown(item) {
    if (!this.click) {
      this.click = 1;
      return this.click;
    } else if (this.click = 1) {
      this.click = null;
      return this.click;
    }
  }
  getMargin(event) {
    let margin = 10;
    if (event.id == 1) {
      margin = 10;
    } else if (event.id == 8) {
      margin = 30;
    } else  {
      margin = 1;
    } 
    return margin;
  }

  getColor(event) {
    let color = "#ff7900";
    if (event.liste) {
      color = "white";
    }  else  {
      color = "#ff7900";
    } 
    return color;
  }
}
