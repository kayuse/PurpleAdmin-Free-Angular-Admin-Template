import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hymnedit',
  templateUrl: './hymnedit.component.html',
  styleUrls: ['./hymnedit.component.scss']
})
export class HymneditComponent implements OnInit {
  private id: number = null
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { this.id = params.get('id') })
  }
  
}
