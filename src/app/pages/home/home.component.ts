import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [
        1.8, 0.55, 0.69, 0.97, 1.04, 1.0, 2.02, 1.34, 1.87, 1.77, 2.71, 3.15,
        4.33, 2.51, 1.41, 1.34,
      ],
      label: 'Distance to school facility',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
  ];
  public barChartLabels = [
    'Western',
    'Central',
    'Greater Accra',
    'Volta',
    'Eastern',
    'Ashanti',
    'Western North',
    'Ahafo',
    'Bono',
    'Bono East',
    'Oti',
    'Northern',
    'Savannah',
    'North East',
    'Upper East',
    'Upper West',
  ];

  public doughnutChartData = [
    { data: [9902, 6588, 6397, 6194, 5782, 5326], label: 'Difficulties' },
  ];

  public doughnutChartLabels = [
    'Sight',
    'Intellectual',
    'Self-care',
    'Hearing',
    'Physical',
    'Speech',
  ];

  public barChartData2 = [
    {
      data: [4498, 3397, 3522, 3024, 3001, 2880],
      label: 'Male',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },

    {
      data: [5404, 3191, 2875, 3170, 2781, 2446],
      label: 'Female',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ];
  public barChartLabels2 = [
    'Sight',
    'Intellectual',
    'Self-care',
    'Hearing',
    'Physical',
    'Speech',
  ];

  public barChartData3 = [
    {
      data: [95.42, 85.81, 72.36, 67.48],
      label: 'Attendance',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },

    {
      data: [4.58, 14.19, 27.64, 32.54],
      label: 'Non-Attendance',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ];
  public barChartLabels3 = [
    'Water on premises',
    'Within 30 minutes',
    '31 to 60 minutes',
    '61 minutes and above',
  ];

  public lineChartData = [
    {
      data: [
        615057, 501598, 586280, 531871, 546508, 521065.5, 495623, 453927,
        375416, 282802, 279786, 211432, 143078, 124865.17, 106652.33, 88439.5,
        70226.667, 52013.833, 33801, 69192, 8783, 110013,
      ],
      label: 'Children out of School',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },

    {
      data: [
        605029, 489610, 591960, 538052, 564741, 531987.5, 499234, 487691,
        398499, 304515, 300154, 227994.5, 155835, 139346.33, 122857.67, 106369,
        89880.333, 73391.667, 56903, 84794, 26649, 155175,
      ],
      label: 'Children out of School Males',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

    {
      data: [
        1220086, 991208, 1178240, 1069923, 1111249, 1053053, 994857, 941618,
        773915, 587317, 579940, 439426.5, 298913, 334382, 285646.4, 236910.8,
        188175.2, 139439.6, 90704, 153986, 35432, 265188,
      ],
      label: 'Children out of School Females',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
  ];
  lineChartDataLabel = [
    1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  ];
}
