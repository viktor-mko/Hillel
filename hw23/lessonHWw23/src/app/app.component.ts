import { Component } from '@angular/core';
import { ISchool, ICourses, ISchoolHillel } from './model/SchoolInterface';
import {getClassFromStaticSymbol} from "@angular/compiler-cli/src/diagnostics/typescript_symbols";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ISchool{

  constructor (){

  }

  school: ISchoolHillel = {
    name: 'Hillel',
    executive: 'Misha',
    courses: [
      {
        id: 10,
        courseName: 'Javascript basic',
        price: 5400
      },
      {
        id: 12,
        courseName: 'Javascript Pro',
        price: 6400
      },
      {
        id: 2,
        courseName: 'Python',
        price: 6400
      },
      {
        id: 54,
        courseName: 'Php',
        price: 5400
      }
    ]
  }

  minID(obj: Array<ICourses>): ICourses {
      return obj.reduce(function (p, v) {
        return ( p.id < v.id ? p : v );
      });
  }

  id = minID(this.school.courses);

  getSchoolName(): string {
    return this.school.name;
  };
  getExecutive(): string {
    return this.school.executive;
  }

}

function getFuctorial (val: number | string): number {
  val = +val;
  return (val != 1) ? val * getFuctorial(val - 1) : 1;
}

getFuctorial(10);


function minID(obj: Array<ICourses>): {id: number, courseName: string, price: number} {
  return obj.reduce(function (p, v) {
    return ( p.id < v.id ? p : v );
  });
}
