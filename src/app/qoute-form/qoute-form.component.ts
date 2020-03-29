import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date());//format as defined by class property

  @Output() addQuote = new EventEmitter<Quote>();//event emitter to listen and send out new quotes on quote parent component

  submitQuote() {
    this.addQuote.emit(this.newQuote);//this triggers addition of the new quote
  }


  constructor() { }

  ngOnInit(): void {
  }

}
