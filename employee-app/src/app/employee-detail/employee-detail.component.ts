import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employeeData: any = null;
  showModal:any = 'none';
  selectedEmployee:any;
  searchText:any;
  public search:any = '';
  public query:any = '';

  constructor(private api:EmployeeServiceService) { }

  ngOnInit(): void {
   this.api.getEmployees().subscribe(data => {
      this.employeeData = data;
    },
    error => {
      this.showError(error)
    });
  }

  showError(error:any){
    alert("Error while fetching API data");
  }

  showModalWindow(data:any){
    this.showModal ='block';
    this.selectedEmployee = data;
  }

  openPopup() {
    this.showModal = "block";
  }
  closePopup() {
    this.showModal = "none";
  }
}
