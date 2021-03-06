import { Injectable } from '@angular/core';
import Chart from 'chart.js'
import {DataElement, DatasetsArray} from '../model/data-element';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  init (canvas, config) {
    let ctx = canvas.getContext('2d');
    return new Chart(ctx, config)
  }

  createConfig(type, data, options) {
    return {
      type: type,
      data: data,
      options: options
    }
  }

  getData(labels: Array<string>, array:DatasetsArray) {
    return {
      labels: labels,
      datasets: array
    }
  }
}
