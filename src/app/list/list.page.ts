import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'pin'
  ];
  public sala: Array<{ id: number ;centroAula: string; totalSalas: string; localizacao: string }> = [];
  constructor() {

      this.sala.push({
        id: 1,
        centroAula: 'A',
        totalSalas: '110',
        localizacao: '2mm'
      });
    this.sala.push({
      id: 2,
      centroAula: 'B',
      totalSalas: '110',
      localizacao: '4mm'
    });
    this.sala.push({
      id: 3,
      centroAula: 'C',
      totalSalas: '150',
      localizacao: '3mm'
    });
    this.sala.push({
      id: 5,
      centroAula: 'D',
      totalSalas: '200',
      localizacao: '3 Km'
    });
    this.sala.push({
      id: 5,
      centroAula: 'E',
      totalSalas: '140',
      localizacao: '4 Km'
    });
 
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
