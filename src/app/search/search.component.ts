import {Component, OnInit} from '@angular/core';
import {SubjectSearchService} from '../subject-search.service';
import {VehicleSearchService} from '../vehicle-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  vehicles: {};
  subjects: {};
  hasSubjects: boolean;
  hasVehicles: boolean;
  subjectQuery: { lastName: string, firstName: string, phoneNumber: string, gender: string };
  vehicleQuery: {year: string, make: string, model: string, licensePlateNumber: string, licensePlateState: string, vin: string};
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(
    private subjectSearchService: SubjectSearchService,
    private vehicleSearchService: VehicleSearchService
  ) {
    this.vehicles = {};
    this.subjects = {};
    this.hasSubjects = false;
    this.hasVehicles = false;
    this.subjectQuery = {lastName: "", firstName: "", phoneNumber: "", gender: ""};
    this.vehicleQuery = {year: "", make: "", model: "", licensePlateNumber: "", licensePlateState: "", vin: ""};
  }

  ngOnInit(): void {
  }

  getVehicles(): void {
    this.vehicles = this.vehicleSearchService.search(this.vehicleQuery)
      .then(response => {
        this.vehicles = response;
        this.hasVehicles = true;
      });
  }

  getSubjects(): void {
    this.subjects = this.subjectSearchService.search(this.subjectQuery)
      .then(response => {
        this.subjects = response;
        this.hasSubjects = true;
        debugger;
      });
  }

  clearSubjectSearch(): void {
    this.subjects = {};
    this.hasSubjects = false;
  }

  clearVehicleSearch(): void {
    this.vehicles = {};
    this.hasVehicles = false;
  }
}
