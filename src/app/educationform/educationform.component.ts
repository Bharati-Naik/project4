import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-educationform',
  templateUrl: './educationform.component.html',
  styleUrls: ['./educationform.component.css']
})
export class EducationformComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  allData: any = [];

  onUpload(value: any){
    console.log(value.target.files[0]);
    this.allData.push(value.target.files[0]);
  }
  onSubmit(){
    console.log(this.allData[0]);
    this.http.post('../assets/data/',this.allData[0]);
  }
}



