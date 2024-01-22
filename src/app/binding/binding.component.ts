import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  name = "CodeBiding"
  myId = "id-1"
  isDisabled = false

  greenStyle = "green"

  hasError = true

  italicText = "italic"

  messageClasses = {
    "red": !this.hasError,
    "blue": this.hasError,
    "italic": this.hasError
  }

  highlightText = "orange"

  titleStyles = {
    backgroundColor: "pink",
  }

  twName = ""
}
