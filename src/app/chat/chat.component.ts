declare var socket: any;

import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgs = ['aa', 'bb'];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    socket.on('chat message', (msg: string) => {
      this.zone.run(() => {
        this.msgs.push(msg)
      });
    });
  }

  send = function (msg: string) {
    // this.msgs.push(msg);
    socket.emit('chat message', msg);
  };

}
