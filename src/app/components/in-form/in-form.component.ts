import { Component, OnInit } from '@angular/core';
import { YearNode } from 'src/app/models/YearNode';
import { CliBackendService } from 'src/app/services/cli-backend.service';

@Component({
  selector: 'app-in-form',
  templateUrl: './in-form.component.html',
  styleUrls: ['./in-form.component.scss']
})
export class InFormComponent implements OnInit {

  readonly startMinYear :number = 1913;
  readonly startDefaultYear :number = 2000;
  readonly startMaxYear: number = this.getCurrentYear();

  private  startValueYear: number = this.startDefaultYear;
  private  endValueYear: number = this.startMaxYear;
  private  dollarValue:number=100;

  public changePercentange : number=0;
  private data: YearNode[]=[];

  constructor(private cli:CliBackendService) {
    this.cli.getYearNodeSeries().subscribe(n => this.data=n);

  }

  ngOnInit(): void {
  }

  public getMonetaryChange() :number {
    return this.dollarValue + (this.dollarValue * this.changePercentange);
  }

  public getPercentage() :number {
    if(this.data.length==0){
      return 0;
    }

    let t: YearNode= <YearNode>{};
    let s:YearNode=t;
    let e:YearNode=t;
    this.data.forEach( n => {
      if(n.year==this.startValueYear) {
        s=n;
      }
      if(n.year==this.endValueYear) {
        e=n;
      }
    })

    if(s==t) {
      s=this.data[0];
    }
    if(e==t){
      e=this.data[this.data.length-1];
    }

    console.log()
    let n: number = this.getPer(e.months[e.months.length-1],s.months[0]);
    this.changePercentange=n;
    return this.changePercentange;
  }

  private getPer(newNum:number, oldNum:number) {
    return (newNum-oldNum)/oldNum;
  }

  private getCurrentYear() :number {
    return new Date().getFullYear();
  }

  public getChangePercentage() :number {
    return this.changePercentange;
  }

  public setStartValueYear(n : string) :void {
    let num :number = parseInt(n);
    if(isNaN(num)) {
      this.startValueYear=this.startMinYear;
      return;
    }

    if(num<this.startMinYear) {
      this.startValueYear=this.startMinYear;
    }

    let x = this.getPercentage()

    this.startValueYear=num;
  }

  public setEndValueYear(n : string) :void {
    let num :number = parseInt(n);
    if(isNaN(num)) {
      this.endValueYear=this.startMinYear;
      return;
    }

    if(num<this.startMinYear) {
      this.endValueYear=this.startMinYear;
    }

    this.endValueYear=num;
    let x = this.getPercentage();
  }

  public setDollarValue(n : string) {
    let num :number = parseInt(n);
    if(isNaN(num)) {
      this.dollarValue=100;
      return;
    }

    if(num<0) {
      this.startValueYear=100;
    }

    this.dollarValue=num;
    this.getPercentage()
  }


  public getStartValueYear() :number {
    return this.startValueYear;
  }


}
