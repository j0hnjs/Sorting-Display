import React from 'react';
import './display.css';
import { getBubbleSortDisplay } from '../algorithms/bubbleSort';
import { getSelectionSortDisplay } from '../algorithms/selectionSort';
import { getQuickSortDisplay } from '../algorithms/quickSort';
import { getMergeSortDisplay } from '../algorithms/mergeSort';

const ANIMATION_SPEED_MS = 5;
const BAR_COUNT = 150;

const MAIN_COLOR = '#30BEFE';

const COMPARISON_COLOR = 'yellow';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Display extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
  
    componentDidMount() {
      this.resetArray();
    }

    runSort(animations) {
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? COMPARISON_COLOR : MAIN_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } 

        else if (animations[i] === "noSwap") {
          setTimeout(() => {
          }, i * ANIMATION_SPEED_MS);
        }
        
        else {
          setTimeout(() => {
            const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight1 * 0.1}%`;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newHeight2 * 0.1}%`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    resetArray() {
        const array = []
        for (let i = 0; i < BAR_COUNT; i++) {
            array.push(randomInteger(5, 1000))
        }
        this.setState({array});
    }
  
    mergeSort() {
      const animations = getMergeSortDisplay(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? COMPARISON_COLOR : MAIN_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight * 0.1}%`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  
    quickSort() {
      const animations = getQuickSortDisplay(this.state.array);
      this.runSort(animations)
    }
  
    selectionSort() {
      const animations = getSelectionSortDisplay(this.state.array);
      this.runSort(animations)
    }
  
    bubbleSort() {
      const animations = getBubbleSortDisplay(this.state.array);
      this.runSort(animations)
    }

    // addTime(start, end) {
    //   const arrayContainer = document.querySelector(".array-container");
    //   const bars = arrayContainer.firstChild;
    //   const timeTaken = Math.round((end - start) / 1000)
    //   const timeBox = document.createElement('div')
    //   timeBox.classList.add("timeBox")
    //   timeBox.innerHTML = `Elapsed time: ${timeTaken} seconds!`
    //   arrayContainer.insertBefore(timeBox, bars)
    // }
  
    render() {
      const {array} = this.state;
  
      return (
          <div className="app">
              <div className="navbar">
                  <h className="title">Sorting Algorithm Display</h>
                  <button className="btn btn-warning" onClick={() => this.resetArray()}>Generate</button>
                  <button className="btn btn-success" onClick={() => this.mergeSort()}>Merge Sort</button>
                  <button className="btn btn-success" onClick={() => this.quickSort()}>Quick Sort</button>
                  <button className="btn btn-success" onClick={() => this.selectionSort()}>Selection Sort</button>
                  <button className="btn btn-success" onClick={() => this.bubbleSort()}>Bubble Sort</button>
              </div>
              <div className="array-container">
                  <div className="array-bars-container">
                      {array.map((value, i) => (
                          <div
                              className="array-bar"
                              key={i}
                              style={{
                                  backgroundColor: MAIN_COLOR,
                                  height: `${value * 0.1}%`,
                              }}></div>
                      ))}
                  </div>
              </div>
              <footer class="footer">
                <p>&copy; Sorting Algorithm Display. 2024.</p>
              </footer>
          </div>
      );
    };
  }