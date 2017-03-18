import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EventsResolverService } from '../events-resolver.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any
  constructor(
    private eventService: EventsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.events = this.router.snapshot.data['events']
  }

}
