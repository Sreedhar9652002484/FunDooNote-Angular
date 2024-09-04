import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { DataserviceService } from '../../services/DataService/dataservice.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    RouterModule,
    MatMenuModule
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrected this line
})
export class DashboardComponent {
  @ViewChild('searchInput') searchInput!: ElementRef ;

  constructor(private router:Router, private data:DataserviceService){}
  toggle: boolean = true;
  selectedItem:string | null=null;

  sidenavToggle():void{
    this.toggle = !this.toggle;
    console.log("hhhhh")
  }
  selectItem(item:string):void{
    this.selectedItem=item;
    this.router.navigateByUrl('home/'+item)
    console.log(item);
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login')

  }
  Search(event:any){
    this.data.outgoingData(event.target.value);
  }
  ClearSearch(){
    this.searchInput.nativeElement.value='';
    this.data.outgoingData("");
  }
}