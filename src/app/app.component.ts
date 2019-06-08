import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private http: HttpClient) { }

  result = {erro: true};
  validInput = false;
  apiURL = '';

  cepResults(inputValue) {
    this.apiURL = 'https://viacep.com.br/ws/' + inputValue + '/json/'
    this.validInput = true;
    this.http.get(this.apiURL).subscribe(
      result => {
        this.result = result;
        // console.log(this.result);
      }
    );

}}
