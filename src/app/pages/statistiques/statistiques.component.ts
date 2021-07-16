import { Component, HostListener, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { DataService } from 'src/app/service/data.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  datalabels: ApexDataLabels,
  legend: ApexLegend;
  fill: ApexFill;
  colors: string[],
};
export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  datalabels: ApexDataLabels,
  legend: ApexLegend;
  fill: ApexFill;
  colors: ["#009393", "#ff7900"],
};
@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  borderfilter1;
  colorfilter1;
  societes = [
    {
      societe: "SONATEL",
    },
    {
      societe: "OFMS",
    }
  ]
  directions1 = [
    {
      direction: "DSD",
      interHommes: 40,
      interFemmes: 20
    },
    {
      direction: "DRH",
      interHommes: 10,
      interFemmes: 35
    },
    {
      direction: "DGA",
      interHommes: 29,
      interFemmes: 41
    },
    {
      direction: "DMGP",
      interHommes: 18,
      interFemmes: 29
    },
    {
      direction: "DOI",
      interHommes: 37,
      interFemmes: 29
    },
    {
      direction: "DSC",
      interHommes: 46,
      interFemmes: 42
    },
    {
      direction: "DRJ",
      interHommes: 11,
      interFemmes: 39
    },
    {
      direction: "ARQ",
      interHommes: 36,
      interFemmes: 28
    },
    {
      direction: "DAL",
      interHommes: 18,
      interFemmes: 42
    },
  ];
  directions2 = [
    {
      direction: "DD",
      interHommes: 21,
      interFemmes: 18
    },
    {
      direction: "OM",
      interHommes: 46,
      interFemmes: 43
    },
    {
      direction: "PM",
      interHommes: 26,
      interFemmes: 39
    },
    {
      direction: "CP",
      interHommes: 29,
      interFemmes: 19
    },
    {
      direction: "CD",
      interHommes: 16,
      interFemmes: 28
    }
  ];
  diagram1 = [
    {
      annee: 2021,
      nouveau: 200,
      fini: 120,
      total: 800,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },{
      annee: 2020,
      nouveau: 280,
      fini: 110,
      total: 925,
      mois: [
        {
          mois: "Jan",
          nouveau: 30,
          fini: 10,
          total: 89,
        },{
          mois: "Fev",
          nouveau: 40,
          fini: 40,
          total: 94,
        },{
          mois: "Mar",
          nouveau: 20,
          fini: 10,
          total: 96,
        },{
          mois: "Avr",
          nouveau: 20,
          fini: 40,
          total: 111,
        },{
          mois: "Mai",
          nouveau: 25,
          fini: 35,
          total: 82,
        },{
          mois: "Jui",
          nouveau: 30,
          fini: 18,
          total: 122,
        },{
          mois: "Jul",
          nouveau: 26,
          fini: 31,
          total: 87,
        },{
          mois: "Aou",
          nouveau: 36,
          fini: 18,
          total: 99,
        },{
          mois: "Sep",
          nouveau: 29,
          fini: 31,
          total: 69,
        },{
          mois: "Oct",
          nouveau: 26,
          fini: 36,
          total: 115,
        },{
          mois: "Nov",
          nouveau: 39,
          fini: 22,
          total: 131,
        },{
          mois: "Dec",
          nouveau: 33,
          fini: 19,
          total: 94,
        },
      ]
    },{
      annee: 2019,
      nouveau: 90,
      fini: 80,
      total: 880,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },{
      annee: 2018,
      nouveau: 90,
      fini: 50,
      total: 725,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },
    {
      annee: 2017,
      nouveau: 100,
      fini:60,
      total: 735,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },{
      annee: 2016,
      nouveau: 80,
      fini: 10,
      total: 625,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },{
      annee: 2015,
      nouveau: 90,
      fini: 80,
      total: 826,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },{
      annee: 2014,
      nouveau: 90,
      fini: 50,
      total: 925,
      mois: [
        {
          mois: "Jan",
          nouveau: 20,
          fini: 40,
          total: 80,
        },{
          mois: "Fev",
          nouveau: 28,
          fini: 10,
          total: 90,
        },{
          mois: "Mar",
          nouveau: 39,
          fini: 26,
          total: 98,
        },{
          mois: "Avr",
          nouveau: 16,
          fini: 40,
          total: 125,
        },{
          mois: "Mai",
          nouveau: 12,
          fini: 36,
          total: 105,
        },{
          mois: "Jui",
          nouveau: 29,
          fini: 35,
          total: 98,
        },{
          mois: "Jul",
          nouveau: 42,
          fini: 21,
          total: 132,
        },{
          mois: "Aou",
          nouveau: 38,
          fini: 25,
          total: 84,
        },{
          mois: "Sep",
          nouveau: 19,
          fini: 27,
          total: 136,
        },{
          mois: "Oct",
          nouveau: 34,
          fini: 24,
          total: 79,
        },{
          mois: "Nov",
          nouveau: 20,
          fini: 20,
          total: 141,
        },{
          mois: "Dec",
          nouveau: 26,
          fini: 14,
          total: 117,
        },
      ]
    },
  ]
  axex;
  mois;
  directs: any;
  directions: any;
  effectif;
  hommes: any;
  femmes: any;
  nouveau; 
  fini;
  total;
  show = 1;
  color: any;
  public datas: any;
  public diagrammes: any;
  jan: any;
  pager: any = {};
  filterterm: string;
  pagedItems: any[];
  progress = 0;
  progressBar = document.querySelector(".progress-bar");
  intervalId;
  scrHeight:any;
  scrWidth:any;
  item;
  dates;
  dataStat: any;
  /*@ViewChild("chart")*/ chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  public chartOptions6: Partial<ChartOptions>;
  public chartOptions7: Partial<ChartOptions>;
  constructor(private dataService: DataService,) {
    this.getScreenSize();
    this.dataStat = this.dataService.getDataStatistique();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  ngOnInit() {
    this.datas = this.dataService.getData();
    const getDownloadProgress = () => {
      if (this.progress <= 99) {
        this.progress = 30;
        this.progress = this.progress - 2;
      } else {
        clearInterval(this.intervalId);
      }
    };
    this.intervalId = setInterval(getDownloadProgress, 1000);
    this.societeSelectionner(this.item);
    this.dateSelectionner(this.item);
    this.effectifSocieteSelectionner(this.item);
    this.dateSelectionnerPresence(this.item);
    this.serviceSelectionnerPresence(this.item);
    this.dateSelectionnerAgence(this.item);
    this.serviceSelectionnerAgence(this.item);
  }
  dateSelectionner(value){
    this.axex = this.diagram1.map(valueOfDirection => valueOfDirection.annee);
    this.nouveau = this.diagram1.map(valueOfNouveau => valueOfNouveau.nouveau);
    this.fini = this.diagram1.map(valueOfFini => valueOfFini.fini);
    this.total = this.diagram1.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Finis",
          data: this.fini
        },
        {
          name: "Nouveaux",
          data: this.nouveau
        },
        {
          name: "Total",
          data: this.total
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 550,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.axex
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions3;
  }
  effectifSocieteSelectionner(value:string){
    console.log(value);
    this.directs = this.directions1;
    this.directions = this.directions1.map(valueOfDirection => valueOfDirection.direction);
    this.effectif = this.directions1.map(valueOfHomme => valueOfHomme.interHommes);
    if(value == "SONATEL") {
      this.directs = this.directions1;
      this.directions = this.directions1.map(valueOfDirection => valueOfDirection.direction);
      this.effectif = this.directions1.map(valueOfHomme => valueOfHomme.interHommes);
    } else if (value == "OFMS") {
      this.directs = this.directions2;
      this.directions = this.directions2.map(valueOfDirection => valueOfDirection.direction);
      this.effectif = this.directions2.map(valueOfHomme => valueOfHomme.interHommes);
    }
    this.chartOptions2 = {
      colors: [
        "#000"
      ],
      series: [
        {
          name: "Effectif",
          data: this.effectif
        }
      ],
      chart: {
        type: "bar",
        height: 280,
        width: 550,
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.directions
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions2;
  }
  societeSelectionner(value:string){
    this.directs = this.directions1;
    this.directions = this.directions1.map(valueOfDirection => valueOfDirection.direction);
    this.hommes = this.directions1.map(valueOfHomme => valueOfHomme.interHommes);
    this.femmes = this.directions1.map(valueOfFemmes => valueOfFemmes.interFemmes);
    if(value == "SONATEL") {
      this.directs = this.directions1;
      this.directions = this.directions1.map(valueOfDirection => valueOfDirection.direction);
      this.hommes = this.directions1.map(valueOfHomme => valueOfHomme.interHommes);
      this.femmes = this.directions1.map(valueOfFemmes => valueOfFemmes.interFemmes);
    } else if (value == "OFMS") {
      this.directs = this.directions2;
      this.directions = this.directions2.map(valueOfDirection => valueOfDirection.direction);
      this.hommes = this.directions2.map(valueOfHomme => valueOfHomme.interHommes);
      this.femmes = this.directions2.map(valueOfFemmes => valueOfFemmes.interFemmes);
    }
    this.chartOptions3 = {
      colors: [
        "#009393",
        "#ff7900"
      ],
      series: [
        {
          name: "Hommes",
          data: this.hommes
        },
        {
          name: "Femmes",
          data: this.femmes
        }
      ],
      chart: {
        type: "bar",
        height: 280,
        width: 550,
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.directions
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions3;
  }

  dateSelectionnerPresence(value){
    this.axex = this.diagram1.map(valueOfDirection => valueOfDirection.annee);
    this.nouveau = this.diagram1.map(valueOfNouveau => valueOfNouveau.nouveau);
    this.fini = this.diagram1.map(valueOfFini => valueOfFini.fini);
    this.total = this.diagram1.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions4 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Malades",
          data: this.fini
        },
        {
          name: "Présents",
          data: this.nouveau
        },
        {
          name: "Congés",
          data: this.total
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 550,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.axex
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions4;
  }

  serviceSelectionnerPresence(value){
    this.axex = this.diagram1.map(valueOfDirection => valueOfDirection.annee);
    this.nouveau = this.diagram1.map(valueOfNouveau => valueOfNouveau.nouveau);
    this.fini = this.diagram1.map(valueOfFini => valueOfFini.fini);
    this.total = this.diagram1.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions5 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Malades",
          data: this.fini
        },
        {
          name: "Présents",
          data: this.nouveau
        },
        {
          name: "Congés",
          data: this.total
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 550,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.axex
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions5;
  }

  dateSelectionnerAgence(value){
    this.axex = this.diagram1.map(valueOfDirection => valueOfDirection.annee);
    this.nouveau = this.diagram1.map(valueOfNouveau => valueOfNouveau.nouveau);
    this.fini = this.diagram1.map(valueOfFini => valueOfFini.fini);
    this.total = this.diagram1.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions6 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Malades",
          data: this.fini
        },
        {
          name: "Présents",
          data: this.nouveau
        },
        {
          name: "Congés",
          data: this.total
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 550,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.axex
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions6;
  }

  serviceSelectionnerAgence(value){
    this.axex = this.diagram1.map(valueOfDirection => valueOfDirection.annee);
    this.nouveau = this.diagram1.map(valueOfNouveau => valueOfNouveau.nouveau);
    this.fini = this.diagram1.map(valueOfFini => valueOfFini.fini);
    this.total = this.diagram1.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions7 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Malades",
          data: this.fini
        },
        {
          name: "Présents",
          data: this.nouveau
        },
        {
          name: "Congés",
          data: this.total
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 550,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: 
          this.axex
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions7;
  }

  lesDirections(){
    this.directions = this.directions1;
    return this.directions;
  }
  changeshow1() {
    this.show = 1;
    return this.show;
  }
  changeshow2() {  
    this.show = 2;
    return this.show;
  }
  changeshow3() {  
    this.show = 3;
    return this.show;
  }
  changeshow4() {  
    this.show = 4;
    return this.show;
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  getColor(p) {
    if(p.statut == "oui") {
      this.color = "#6dd400";
    } else if (p.statut == "non") {
      this.color = "#f03737";
    }
    return this.color;
  }

 
  getHeight2(p) {
    if(p.id == 2) {
      var total = p.total * 0.145 
      this.jan = total + "px"
    } 
    return this.jan;
  } 
}
