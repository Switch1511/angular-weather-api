import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiRequestService } from 'src/app/core/services/api-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }

  formCity!: FormGroup;
  data!: any;


  ngOnInit(): void {

    this.formCity = new FormGroup({
      city: new FormControl()
    })




  }

  requestAPI(){
    var city = this.formCity.value.city

    this.apiRequest.getAPI(city).subscribe({
      next: (data) => {
        this.data = data
        console.log(this.data)
      },
      error: (error) => {
        console.log(error)
      }}
    );
  }

}
