import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hymn } from 'src/app/model/hymn.model';
import { HymnService } from 'src/app/services/hymn.service';

@Component({
  selector: 'app-sunday-school',
  templateUrl: './sunday-school.component.html',
  styleUrls: ['./sunday-school.component.scss']
})
export class SundaySchoolComponent implements OnInit {

  public filteredHymns: Array<Hymn>
  public filterVerses: boolean = false
  public filterNumber: boolean = false
  public filterChorus: boolean = false
  public filterTitle: boolean = true
  public filterEnglish: boolean = true
  public filterYoruba: boolean = true
  public content: string = ''
  public hymns: Array<Hymn>
  constructor(private hymnService: HymnService, private router: Router) {

  }

  async ngOnInit() {
    this.hymns = await this.hymnService.all()
    this.filteredHymns = this.hymns.filter(hymn => hymn.id < 100)

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
