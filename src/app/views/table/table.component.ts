import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RandomUsersService } from '@services/random-users/random-users.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  users$ = this.randomUsersService.users$;
  constructor(private randomUsersService: RandomUsersService) {}

  exportAsCsv() {}
}
