import { Component ,Input } from '@angular/core';

import { IUser ,  IAuthor} from '../../../service/user/user-interface';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {

  @Input() user!: IAuthor ;

}
