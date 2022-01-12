import { Component } from '@angular/core';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  users$ = this.randomUsersService.users$;
  constructor(private randomUsersService: RandomUserNationalitiesService) {}
}
