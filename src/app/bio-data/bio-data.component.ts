import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bio-data',
  templateUrl: './bio-data.component.html',
  styleUrls: ['./bio-data.component.scss']
})
export class BioDataComponent implements OnInit {
  @Input() firstName: string=''; @Input() lastName: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
