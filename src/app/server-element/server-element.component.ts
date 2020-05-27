import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // We decorate this property with @Input() so it is accessible from
  // outside of this component, so that this component parent component
  // can access it in its template.  With this decorator we allow any
  // component hosting this component is able to bind to this element
  // property of this component.
  // If you wanted to use 'element' inside but outside something like
  // 'srvElement', you can make it alias by passing 'srvElement' to 
  // the Input() like Input('srvElement)
  @Input('element') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
