import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Hymn } from 'src/app/model/hymn.model';
import { Verse } from 'src/app/model/verse.model';
import { HymnService } from 'src/app/services/hymn.service';



@Component({
  selector: 'app-hymnedit',
  templateUrl: './hymnedit.component.html',
  styleUrls: ['./hymnedit.component.scss']
})
export class HymneditComponent implements OnInit {
  private id: number = null
  public showError: boolean = false
  public errors: Array<string> = []
  public editorStyle = {
    height: '200px'
  };
  public hymn: Hymn
  public chorus: string = ""
  constructor(private activatedRoute: ActivatedRoute, private hymnService: HymnService,
    private spinner: NgxSpinnerService, private toastr: ToastrService, private router: Router) {
    this.hymn = {} as Hymn
  }

  ngOnInit(): void {
    this.spinner.show()
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      this.getHymn()

    })
  }
  addVerse() {
    let verse = {
      id: this.hymn.verses.length + 1,
      content: '',
      hymn_id: this.hymn.id
    } as Verse
    this.hymn.verses.push(verse)
  }
  async submit() {
    try {
      this.spinner.show()
      if (!this.validate()) {
        this.toastr.error(this.errors.toString())
        this.spinner.hide()
        return;
      }
      let result = await this.hymnService.edit(this.hymn)
      this.toastr.success('Hymn Editted Successfully')
      this.spinner.hide()
    } catch (e) {
      this.errors.push('There was an error in edditting your hymn please try again')
      this.spinner.hide()
      this.toastr.error('Error', this.errors.toString())
    }
  } back() {
    this.router.navigate(['/hymns'])
  }
  validate() {
    this.errors = []
    if (this.hymn.title == '') {
      this.errors.push('Title cannot be empty')
    }
    if (this.hymn.chorus == '') {
      this.errors.push('Chorus cannot be empty')
    }
    if (this.hymn.extra == '') {
      this.errors.push('Extra cannot be empty')
    }
    this.hymn.verses.map(verse => {
      if (verse.content == '') {
        this.errors.push('You cannot have an empty verse, if you dont want to record the verse, delete the verse')
      }
    })
    return this.errors.length <= 0
  }
  deleteVerse(verse) {
    this.hymn.verses = this.hymn.verses.filter(verses => verses.id != verse.id)
  }
  async getHymn() {
    this.hymn = await this.hymnService.get(this.id)
    this.chorus = this.hymn.chorus
    this.spinner.hide()
  }
  getErrors() {
    return this.errors.toString()
  }
}
