import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  accounts = [
    {id : 101, name : 'RRSP', status : 'Online'},
    {id : 102, name : 'TFSA', status : 'Offline'},
    {id : 103, name : 'Trading', status : 'Offline'},
    {id : 104, name : 'Loan', status : 'Online'},
    {id : 105, name : 'Savings', status : 'Offline'}
];

}
