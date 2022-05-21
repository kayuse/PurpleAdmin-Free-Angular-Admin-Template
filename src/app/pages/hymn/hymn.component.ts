import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Hymn } from 'src/app/model/hymn.model';
import { HymnService } from 'src/app/services/hymn.service';
import { URLSearchParams } from 'url';

@Component({
  selector: 'app-hymn',
  templateUrl: './hymn.component.html',
  styleUrls: ['./hymn.component.scss']
})
export class HymnComponent implements OnInit {
  public filteredHymns: Array<Hymn>
  public filterVerses: boolean = false
  public filterNumber: boolean = false
  public filterChorus: boolean = false
  public filterTitle: boolean = true
  public filterEnglish: boolean = true
  public filterYoruba: boolean = true
  public content: string = ''
  public hymns: Array<Hymn>
  constructor(private hymnService: HymnService, private router: Router, private spinner: NgxSpinnerService,) {

  }

  async ngOnInit() {
    this.spinner.show()
    this.hymns = await this.hymnService.all()
    this.filteredHymns = this.hymns.filter(hymn => hymn.id < 100)
    this.spinner.hide()
  }
  async search() {
    let params = this.computeSearch()
    this.filteredHymns = await this.hymnService.search(this.content, params)
    console.log(this.filteredHymns);
  }
  changeFilter(variable) {
    if (variable == 'verses') {
      this.filterVerses = !this.filterVerses
    }
    if (variable == 'number') {
      this.filterNumber = !this.filterNumber
    }
    if (variable == 'chorus') {
      this.filterChorus = !this.filterChorus
    }
    if (variable == 'title') {
      this.filterTitle = !this.filterTitle
    }
    if (variable == 'english') {
      this.filterEnglish = !this.filterEnglish
    }
    if (variable == 'yoruba') {
      this.filterYoruba = !this.filterYoruba
    }
  }
  computeSearch() {
    let searchParams: HttpParams = new HttpParams()
    if (this.filterVerses) {
      searchParams = searchParams.set('verses', 'true')
    }
    if (this.filterNumber) {
      searchParams = searchParams.set('number', 'true')
    }
    if (this.filterChorus) {
      searchParams = searchParams.set('chorus', 'true')
    }
    if (this.filterTitle) {
      searchParams = searchParams.set('title', 'true')
    }
    if (this.filterEnglish) {
      searchParams = searchParams.append('language[]', 'english')
    }
    if (this.filterYoruba) {
      searchParams = searchParams.append('language[]', 'yoruba')
    }
    return searchParams.toString()

  }
  openEditPage(hymn: Hymn) {
    console.log('bro')
    //this.modalService.open( editHymnModalContent );
    console.log(hymn)
    this.router.navigate(['/hymn/edit', hymn.id])
  }

}
