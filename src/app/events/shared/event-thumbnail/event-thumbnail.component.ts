import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})


export class EventThumbnailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  @Input() event //gets event from parent html param

  ngOnInit() {
  }

}
