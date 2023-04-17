import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private apiRequest: ApiRequestService) { }



  ngOnInit(): void {
   this.apiRequest.getAPI()

  }

}
