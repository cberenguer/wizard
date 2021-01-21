import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wizard';

  hideStep = true;
  disableButton = true;
  previousButton = true;
  nextButton = false;
  activeStep = true;
  currentStepIndex: number;
  steps: any[] = [
    {
      label: 'Paso 1',
      text: 'Este es el paso 1',
      active: true
    },
    {
      label: 'Paso 2',
      text: 'Este es el paso 2',
      active: false
    },
    {
      label: 'Paso 3',
      text: 'Este es el paso 3',
      active: false
    }
  ];

  nextStep(): void {
    this.currentStepIndex = this.steps.findIndex(value => value.active);
    const nextStepIndex = this.currentStepIndex + 1;
    this.previousButton = false;
    if (nextStepIndex < this.steps.length) {
      this.steps[this.currentStepIndex].active = false;
      this.steps[nextStepIndex].active = true;
    }
    if (nextStepIndex === this.steps.length - 1) {
      this.currentStepIndex = nextStepIndex;
      this.nextButton = true;
      this.disableButton = false;
    }
  }

  previousStep(): void {
    this.currentStepIndex = this.steps.findIndex(value => value.active);
    this.nextButton = false;
    this.disableButton = true;
    console.log(this.currentStepIndex);
    if (this.currentStepIndex >= 0) {
      this.steps[this.currentStepIndex].active = false;
      this.steps[this.currentStepIndex - 1].active = true;
      this.currentStepIndex = this.currentStepIndex - 1;
    }

    if (this.currentStepIndex === 0) {
      this.previousButton = true;
    }
  }

  goToStart(): void {
    this.steps = this.steps.map(((value, index) => {
      if (index === 0) {
        this.currentStepIndex = index;
        value.active = true;
      } else {
        value.active = false;
      }
      return value;
    }));
    this.nextButton = false;
    this.disableButton = true;
    this.previousButton = true;
  }
}
