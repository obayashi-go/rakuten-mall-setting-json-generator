import { Component, OnInit, Input } from '@angular/core';
import {Pattern, PatternObj, ImgSrcObj, patternsHashMap} from "../../interface/types";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-setting',
  templateUrl: './banner-setting.component.html',
  styleUrls: ['./banner-setting.component.scss']
})
export class BannerSettingComponent implements OnInit {
  @Input() pattern: Pattern | undefined;

  public fg: FormGroup;
  public imgSrcObjList: ImgSrcObj[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.fg = this.formBuilder.group({
      useThisPattern: [false, Validators.compose([Validators.required])],
      beginDate: [''],
      endDate: ['']
    });
    this.createPatternObjList()
  }

  private createPatternObjList(): void {
    const targetPatternObj = patternsHashMap.find((patternObj: PatternObj) => patternObj.ptId === this.pattern);
    const targetBannerCount = !!targetPatternObj ? targetPatternObj.bannerCount : 0;
    for (let i = 0; i < targetBannerCount; i++) {
      this.imgSrcObjList.push({ src: '', transitionDestination: '' });
    }
  }

  ngOnInit(): void {
    this.createPatternObjList();
  }

}
