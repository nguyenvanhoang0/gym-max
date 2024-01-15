import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IUpdateColor } from '../../../service/color-preference/color-preference-interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Output() colorIdData = new EventEmitter<IUpdateColor>();

  @Input() viewType: number = 0;
  @Input() exerciseData: IPracticeTime[] = [];
  color: IUpdateColor = {
    id: 0,
    color: "",
  }

  getUniqueColors(): { id: number; color: string; content: string }[] {
    const uniqueIdsWithColors: { id: number; color: string; content: string }[] = [];

    this.exerciseData.forEach((exercise) => {
      let existingId: { id: number; color: string; content: string } | undefined;

      if (this.viewType === 0) {
        existingId = uniqueIdsWithColors.find((item) => item.id === exercise.myWorkoutId);
        // console.log(exercise.myWorkoutId);

      } else {
        existingId = uniqueIdsWithColors.find((item) => item.id === exercise.categoryId);
      }

      if (!existingId) {
        if (this.viewType === 0) {
          uniqueIdsWithColors.push({
            id: exercise.myWorkoutId,
            color: exercise.defaultColor,
            content: exercise.target
          });
        } else {
          uniqueIdsWithColors.push({
            id: exercise.categoryId,
            color: exercise.categoryColor,
            content: exercise.categoryName
          });
        }
      } else {
        // If the existingId already exists, update the color and content
        existingId.color = this.viewType === 0 ? exercise.defaultColor : exercise.categoryColor;
        existingId.content = this.viewType === 0 ? exercise.target : exercise.categoryName;
      }
    });
    // console.log(uniqueIdsWithColors);

    return uniqueIdsWithColors;
  }

  clickNote(colorId: number) {
    if (this.color.id == colorId) {
      this.color.id = 0;

    } else {
      this.color.id = colorId
    }

    this.colorIdData.emit(this.color);

  }

  dataupdateColor(id: number, color: string) {
    this.color.id = id,
      this.color.color = color
    console.log(6);
    this.colorIdData.emit(this.color);

    // this.updateColor()
  }
}
