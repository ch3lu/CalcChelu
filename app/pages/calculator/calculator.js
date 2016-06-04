import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/calculator/calculator.html'
})
export class CalculatorPage {
  constructor() {

    this.firstValue = "";
    this.secondValue = 0;
    this.op = "";
    this.tmp = "";
    this.digits = [];
    this.result = 0;
    this.simbol = "";
    this.op_tapped = false;
    const decimal = true;

    if (isNaN(this.tmp) && this.tmp != "") {
      this.tmp = 0;
    }
  }

      clear(event) {
      this.tmp = 0;
      this.simbol = "";
      this.op = "";
      this.decimal = false;
      }

      oper(event, opr) {
        this.op = opr;
        this.digits.push(this.tmp);
        this.firstValue = this.tmp;
        this.tmp = "";
        this.simbol = this.getSimbol(opr);
        this.op_pressed = true;
      }

      getSimbol (opr) {
          switch (opr) {
            case 'add':
            return "+";
            case 'minus':
            return "-";
            case 'multiply':
            return "x"
            case "div":
            return "÷"
          }
        }

      numb(event, i) {
        if (this.tmp == 0 || this.op_pressed) {
          this.tmp = i;
        } else {
          this.tmp = "" + this.tmp + i
        }
        if (i = '.') {
          this.decimal = true;
        }
        this.op_pressed = false;
      }

            convert(j) {
        if (this.decimal) { 
          return parseFloat(j)
        } else { 
          return parseInt(j) 
        }
      }

        equal(event) {
      switch (this.op) {
        case 'add':
          this.result = this.convert(this.firstValue) + this.convert(this.tmp);
          this.tmp = this.result;
          break;
        case 'minus':
          this.result = this.convert(this.firstValue) - this.convert(this.tmp);
          this.tmp = this.result;
          break;
        case 'multiply':
          this.result = this.convert(this.firstValue) * this.convert(this.tmp);
          this.tmp = this.result;
          break;
        case 'div':
          this.result = this.convert(this.firstValue) / this.convert(this.tmp);
          this.tmp = this.result;
          break;        
      }
      this.simbol = "";
      this.op = "";
      this.op_pressed = false;
      this.firstValue = "";

    }
}
