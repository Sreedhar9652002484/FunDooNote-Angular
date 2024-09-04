import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reviewform',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatDividerModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatSelectModule,MatDatepickerModule,MatRadioModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reviewform.component.html',
  styleUrl: './reviewform.component.css'
})
export class ReviewformComponent {

}
